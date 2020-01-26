module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleDirectories: ['.', 'node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
