module.exports = {
  input: './js/graph.js',
  output: {
    file: './js/output.js',
    format: 'umd',
    name: 'GraphBundle',
    globals: {
      echarts: 'echarts', // <--- Add this line
    },
  },
  external: ['echarts'], // <--- Add this line
};