import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { default as terser} from '@rollup/plugin-terser';

export default {
  preserveModules: true,
  input: './js/graph.js',
  output: {
    file: './js/output.js',
    format: 'es',
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
    terser({
      ecma: 2023,
      mangle: true,
      compress: true,
    }),
  ],
};