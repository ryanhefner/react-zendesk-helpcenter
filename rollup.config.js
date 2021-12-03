import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: {
    name: pkg.name,
    file: './index.js',
    format: 'umd',
    globals: {},
    banner: `/*! [banner info] !*/`,
    footer: '/* [footer info] */',
  },
  external: [],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpers: process.env.BABEL_ENV === 'umd',
      runtimeHelpers: true,
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    json(),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;
