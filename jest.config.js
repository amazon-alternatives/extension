module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/helpers/*.ts'],
  coverageReporters: ['html', 'text', 'lcov'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  roots: ['src'],
  moduleFileExtensions: ['js', 'ts'],
}
