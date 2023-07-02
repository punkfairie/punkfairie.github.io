const fs = require('fs')

module.exports = function (eleventyConfig) {
  eleventyConfig.on('eleventy.before', async () => {
    const cssSrc = './src/style/style.css'
    const cssDest = './dist/style.css'

    fs.readFile(cssSrc, (err, css) => {
      require('postcss')([
        require('postcss-import-ext-glob'),
        require('postcss-import'),
        require('postcss-preset-env'),
        require('cssnano'),
      ])
        .process(css, {from: cssSrc, to: cssDest})
        .then(res => {
          fs.writeFile(cssDest, res.css, () => true)
        })
    })

    await require('esbuild').build({
      entryPoints: ['src/js/main.js'],
      bundle: true,
      minify: true,
      target: 'es2020',
      outfile: 'dist/main.js',
    })
      .then(() => console.log('🧳 esbuild done'))
      .catch(() => process.exit(1))
  })

  eleventyConfig.addWatchTarget('./src/style/')
  eleventyConfig.addWatchTarget('./src/js/')

  eleventyConfig.addPlugin(require('eleventy-plugin-automatic-noopener'), {
    noreferrer: true,
  })

  return {dir: {input: 'src', output: 'dist'}}
}
