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

  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
};

export default createJestConfig(config);
