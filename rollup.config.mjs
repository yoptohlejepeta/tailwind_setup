import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: './js/graph.js',
  output: {
    file: './js/output.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.browser': true,
      },
    }),
  ],
};