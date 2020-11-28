module.exports = function(config) {

  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/assets/img");
  config.addPassthroughCopy("src/assets/css");
  return  {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};