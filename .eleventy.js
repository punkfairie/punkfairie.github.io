module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('eleventy-sass'), {
    postcss: require('postcss')([
      require('postcss-preset-env'),
      require('cssnano'),
    ]),
  })

  return {dir: {input: 'src', output: 'dist'}}
}
