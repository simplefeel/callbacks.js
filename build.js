const {rollup} = require('rollup')
const babel = require('rollup-plugin-babel')
const filesize = require('rollup-plugin-filesize')
const uglify = require('rollup-plugin-uglify')
const license = require('rollup-plugin-license')

const targets = {
  umd: 'dist/callbacks.js',
  min: 'dist/callbacks.min.js'
}

function build(format) {
  const defaultPlugins = [
    license({
      banner:
        '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= moment().format("YYYY-MM-DD") + "\\n" %>' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= moment().format("YYYY") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.map(pkg.licenses, "type").join(", ") %> */\n\n'
    }),
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ],
        'stage-0'
      ]
    }),
    filesize()
  ]

  const plugins =
    format === 'min' ?
      defaultPlugins.concat(
          uglify({
            output: {
              comments: true
            }
          })
        ) :
      defaultPlugins

  return rollup({
    input: 'src/callbacks.js',
    plugins
  }).then(bundle =>
    bundle.write({
      file: targets[format],
      format: format === 'min' ? 'umd' : format,
      name: 'callbacks'
    })
  )
}

Promise.all([build('umd'), build('min')]).catch(err => {
  console.error(err)
})
