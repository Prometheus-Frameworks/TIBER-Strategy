/**
 * Minimal, dependency-free JSON Schema validator covering the subset of
 * keywords used by dynasty_strategy_ontology_v1.schema.json:
 *
 *   type (string or array of strings), enum, const, pattern, minLength,
 *   format: "date-time", properties, required, additionalProperties (false),
 *   items, minItems
 *
 * Unknown keywords are rejected loudly so the schema cannot silently use
 * features this validator does not enforce.
 */
const SUPPORTED_KEYWORDS = new Set([
  '$schema',
  '$id',
  'title',
  'description',
  'type',
  'enum',
  'const',
  'pattern',
  'minLength',
  'format',
  'properties',
  'required',
  'additionalProperties',
  'items',
  'minItems',
]);

const DATE_TIME_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function typeOf(value) {
  if (Array.isArray(value)) return 'array';
  if (value === null) return 'null';
  if (typeof value === 'number') return Number.isInteger(value) ? 'integer' : 'number';
  return typeof value;
}

function matchesType(value, expected) {
  const actual = typeOf(value);
  if (expected === 'number') return actual === 'number' || actual === 'integer';
  return actual === expected;
}

export function validateAgainstSchema(value, schema, path = '$', errors = []) {
  for (const keyword of Object.keys(schema)) {
    if (!SUPPORTED_KEYWORDS.has(keyword)) {
      errors.push(`${path}: schema uses unsupported keyword "${keyword}"`);
    }
  }

  if (schema.type !== undefined) {
    const allowed = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!allowed.some((t) => matchesType(value, t))) {
      errors.push(`${path}: expected type ${allowed.join('|')}, got ${typeOf(value)}`);
      return errors;
    }
  }

  if (schema.const !== undefined && value !== schema.const) {
    errors.push(`${path}: expected const ${JSON.stringify(schema.const)}, got ${JSON.stringify(value)}`);
  }

  if (schema.enum !== undefined && !schema.enum.includes(value)) {
    errors.push(`${path}: value ${JSON.stringify(value)} not in enum [${schema.enum.join(', ')}]`);
  }

  if (typeof value === 'string') {
    if (schema.pattern !== undefined && !new RegExp(schema.pattern).test(value)) {
      errors.push(`${path}: string does not match pattern ${schema.pattern}`);
    }
    if (schema.minLength !== undefined && value.length < schema.minLength) {
      errors.push(`${path}: string shorter than minLength ${schema.minLength}`);
    }
    if (schema.format === 'date-time' && !DATE_TIME_PATTERN.test(value)) {
      errors.push(`${path}: string is not an ISO-8601 UTC date-time`);
    }
  }

  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) {
      errors.push(`${path}: array has ${value.length} items, minItems is ${schema.minItems}`);
    }
    if (schema.items !== undefined) {
      value.forEach((item, index) => {
        validateAgainstSchema(item, schema.items, `${path}[${index}]`, errors);
      });
    }
  }

  if (typeOf(value) === 'object') {
    const properties = schema.properties ?? {};
    for (const requiredKey of schema.required ?? []) {
      if (!(requiredKey in value)) {
        errors.push(`${path}: missing required property "${requiredKey}"`);
      }
    }
    for (const [key, child] of Object.entries(value)) {
      if (key in properties) {
        validateAgainstSchema(child, properties[key], `${path}.${key}`, errors);
      } else if (schema.additionalProperties === false) {
        errors.push(`${path}: unexpected additional property "${key}"`);
      }
    }
  }

  return errors;
}
