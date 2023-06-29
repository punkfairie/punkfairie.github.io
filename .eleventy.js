module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('eleventy-sass'), {
    postcss: require('postcss')([
      require('postcss-preset-env'),
      require('cssnano'),
    ]),
  })

  eleventyConfig.addPlugin(require('eleventy-plugin-automatic-noopener'), {
    noreferrer: true,
  })

  return {dir: {input: 'src', output: 'dist'}}
}
