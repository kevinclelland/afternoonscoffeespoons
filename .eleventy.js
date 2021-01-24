module.exports = function(config) {

  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/assets/img");
  config.addPassthroughCopy("src/assets/css");
  config.addPassthroughCopy("src/songs");
  config.addPassthroughCopy("src/sounds");
  config.addPassthroughCopy({ "src/songs": "indexBL/songs" });
  config.addPassthroughCopy({ "src/sounds": "indexBL/sounds" });
  config.addPassthroughCopy({ "src/songs": "indexKS/songs" });
  config.addPassthroughCopy({ "src/sounds": "indexKS/sounds" });

  return  {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};