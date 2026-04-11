/** @type {import('jest').Config} */
export default {
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@src/(.+)\\.js$': '<rootDir>/src/$1.ts',
  },
  transform: {
    '^.+\\.ts$': ['@swc/jest', { jsc: { parser: { syntax: 'typescript', decorators: true }, transform: { decoratorMetadata: true } } }],
  },
  testMatch: ['**/*.spec.ts'],
}
