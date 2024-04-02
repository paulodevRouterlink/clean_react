/* eslint-disable prettier/prettier */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  // moduleNameMapper: {
  //   '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
  //   '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  // },
}
