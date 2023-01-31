import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.jsx',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};