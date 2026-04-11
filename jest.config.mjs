/** @type {import('jest').Config} */
export default {
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@src/(.+)\\.js$': '<rootDir>/src/$1',
    '^@src/(.+)$': '<rootDir>/src/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.ts$': ['@swc/jest', { jsc: { parser: { syntax: 'typescript', decorators: true }, transform: { decoratorMetadata: true }, target: 'es2022' }, module: { type: 'es6' } }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(inversify|@inversifyjs/common|@inversifyjs/container|@inversifyjs/core|@inversifyjs/plugin|@inversifyjs/prototype-utils|@inversifyjs/reflect-metadata-utils))',
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/*.spec.ts'],
  clearMocks: true,
  restoreMocks: true,
}
