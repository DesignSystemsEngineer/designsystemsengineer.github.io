const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/",
  {
    branch: "gh-pages",
    repo: "https://github.com/DesignSystemsEngineer/Blog.git",
    user: {
      name: "garthdb",
      email: "garthdb@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
