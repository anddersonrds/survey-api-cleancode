module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'corevage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest' // Qualquer arquivo que terminar com .ts deve ser rodado com o ts-jest
  }
}
