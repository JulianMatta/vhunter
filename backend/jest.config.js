module.exports = {
  clearMocks: false,
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov', 'clover', 'html', 'cobertura'],
  reporters: ['default', ['jest-junit', { outputName: 'coverage/junit-coverage.xml' }]]
}
