module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      // Handle module aliases (if you are using them in your Next.js project)
      '^@components/(.*)$': '<rootDir>/components/$1',
    },
    testEnvironment: 'jsdom',
  };
  