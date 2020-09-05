const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/<your-app-name>",
  {
    branch: "master",
    repo: "https://github.com/<your-github-username>/<your-repo-name>.git",
    user: {
      name: "<your-github-username>",
      email: "<your-github-email>",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
