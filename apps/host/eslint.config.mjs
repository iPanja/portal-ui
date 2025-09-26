import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		ignores: [
			'node_modules/**',
			'.next/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
		],
		plugins: {
			prettier: prettierPlugin, // <-- must be object in Flat config
		},
		rules: {
			'prettier/prettier': ['error', { useTabs: true, tabWidth: 4 }],
			'no-mixed-spaces-and-tabs': 'error',
			indent: 'off', // Let Prettier handle indentation
		},
	},
];

export default eslintConfig;
