const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	setupFilesAfterEnv: ['jest-extended/all'],
	roots: ['./src/'],
	testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>',
	}),
};
