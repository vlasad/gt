const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/assets/**/*");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if ( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true
      });
      return minified;
    }

    return content;
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src"
    }
  };
};
