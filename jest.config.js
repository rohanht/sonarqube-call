module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'cobertura'],
  coverageDirectory: 'coverage',
  testResultsProcessor: 'jest-sonar-reporter'
};
