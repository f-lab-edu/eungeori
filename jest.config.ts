import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,

  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],

  preset: 'ts-jest',

  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
    '\\.css$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
