import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'

const format = process.env.NODE_ENV
const isUmd = format === 'umd'

const getFileName = file => `${file}${isUmd ? '.min' : ''}.js`

const config = {
  name: 'chitu',
  input: 'src/index.ts',
  sourcemap: true,
  output: {
    file: getFileName('dist/chitu'),
    format
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs()
  ]
}

isUmd && config.plugins.push(uglify(), filesize())

export default config
