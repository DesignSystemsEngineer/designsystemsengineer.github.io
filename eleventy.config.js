const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/posts/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.data.date - a.data.date);
  });
  eleventyConfig.addCollection("frameworks", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/frameworks/*.md");
  });
  eleventyConfig.addCollection("references", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/references/*.md");
  });
  eleventyConfig.addFilter("slugifyTag", (tag) => {
    if (!tag || typeof tag !== "string") return "";
    return tag.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  });
  eleventyConfig.addCollection("tagPages", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob("**/posts/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.data.date - a.data.date);
    const byTag = {};
    posts.forEach((p) => {
      (p.data.tags || []).forEach((tag) => {
        if (tag === "post") return;
        if (!byTag[tag]) byTag[tag] = [];
        byTag[tag].push(p);
      });
    });
    return Object.entries(byTag).map(([tag, tagPosts]) => ({
      tag,
      slug: tag.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      posts: tagPosts,
    }));
  });

  eleventyConfig.addFilter("formatDate", (dateObj, format) => {
    if (!dateObj || !(dateObj instanceof Date)) return "";
    const d = dateObj;
    const months = "January February March April May June July August September October November December".split(" ");
    if (format === "MMMM d, yyyy") return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    return d.toISOString();
  });

  eleventyConfig.addFilter("slice", (arr, start, end) => {
    if (!Array.isArray(arr)) return [];
    return arr.slice(start, end);
  });

  const callout = require("./src/_includes/shortcodes/callout.js");
  eleventyConfig.addPairedShortcode("callout", callout);
  eleventyConfig.addShortcode("figure", require("./src/_includes/shortcodes/figure.js"));

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("favicon-light.svg");
  eleventyConfig.addPassthroughCopy("favicon-dark.svg");
  eleventyConfig.addPassthroughCopy("logo-mark.png");
  eleventyConfig.addPassthroughCopy("DSE-logo.png");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("org-chart-pictures");

  eleventyConfig.setLibrary("md", require("markdown-it")({ html: true }));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: process.env.ELEVENTY_ENV === "production" ? "" : "/",
  };
};
