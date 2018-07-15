import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import reactSvg from 'rollup-plugin-react-svg'
import {uglify} from 'rollup-plugin-uglify'

export default
// browser-friendly UMD build
{
  entry: 'src/main.js',
  dest: pkg.browser,
  format: 'iife',
  moduleName: 'LibraryName',
  sourceMap: true,
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    reactSvg(),
    postcss({
      plugins: []
    }),
    babel({
      exclude: ['node_modules/**'],
      runtimeHelpers: true
    }),
    resolve(), // so Rollup can find node library

    // so Rollup can convert node library/modules to an ES module
    commonjs({
      // https://github.com/rollup/rollup-plugin-node-resolve/issues/58
      namedExports: {
        'node_modules/react-dom/index.js': [ 'render', 'unmountComponentAtNode' ],
        'node_modules/@fortawesome/react-fontawesome/index.js': [ 'FontAwesomeIcon' ],
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement']
      }
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}
