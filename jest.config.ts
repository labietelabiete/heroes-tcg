import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './'
})

const config: Config = {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['node_modules', 'coverage', 'dist', 'build', 'out'],
    moduleDirectories: ['node_modules', '<rootDir>/app'],
    testMatch: ['<rootDir>/tests/**/*.test.ts?(x)'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'
    }
}

export default createJestConfig(config)
