import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';
import replace from 'rollup-plugin-replace';
// import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const cjs = (overrides = {}) => ({
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
  ...overrides,
});

const prodPlugins = [
  terser({
    mangle: { module: true },
    sourcemap: true,
  }),
];

const plugins = ({ prod }) => [
  // resolve(),
  babel({
    runtimeHelpers: true,
  }),
  sourceMaps(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
  }),
  ...(prod ? prodPlugins : []),
];

const config = ({ prod = false, format = cjs } = {}) => {
  const env = prod ? '' : 'dev.';

  return {
    input: './src/index.js',
    output: [format({ file: `dist/color-utils.${env}js` })],
    plugins: plugins({ prod }),
  };
};

export default [config(), config({ prod: true })];
