module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // const htmlmin = require("html-minifier");
  // eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
  //   // Eleventy 1.0+: use this.inputPath and this.outputPath instead
  //   if( outputPath.endsWith(".html") ) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true
  //     });
  //     return minified;
  //   }

  //   return content;
  // });

  return {
    dir: {
      input: "src"
    }
  };
};