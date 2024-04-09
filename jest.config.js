module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{js.ts.jsx.tsx}'],
  // transform: {
  //   '\\.[jt]sx?$': 'babel-jest',
  // },
}
