const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require("eleventy-plugin-toc");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const cheerio = require("cheerio");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3", "h4"],
    wrapper: "nav",
    wrapperClass: "toc__nav",
    ul: true,
  });

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

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    if (!dateObj || !(dateObj instanceof Date)) return "";
    return dateObj.toISOString();
  });

  eleventyConfig.addFilter("slice", (arr, start, end) => {
    if (!Array.isArray(arr)) return [];
    return arr.slice(start, end);
  });

  eleventyConfig.addFilter("cacheBust", (dateObj) => {
    if (!dateObj || !(dateObj instanceof Date)) return "";
    return dateObj.getTime();
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

  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true })
      .use(markdownItAnchor)
      .use(require("markdown-it-footnote"))
  );

  eleventyConfig.addTransform("sidenotes", function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }
    if (!content.includes("footnote-ref")) {
      return content;
    }

    const $ = cheerio.load(content, { decodeEntities: false });
    const $footnotes = $("section.footnotes");
    if (!$footnotes.length) return content;

    const $article = $("article.prose");
    if (!$article.length) return content;

    $article.addClass("has-sidenotes");
    $article.find(".byline").first().append(
      ' <button class="sidenote-toggle" type="button" aria-label="Toggle sidenotes">Hide notes</button>'
    );

    $article.find("sup.footnote-ref").each(function () {
      const $ref = $(this);
      const $link = $ref.find("a");
      const href = $link.attr("href");
      if (!href) return;

      const fnId = href.replace(/^#/, "");
      const $fnItem = $footnotes.find(`#${fnId}`);
      if (!$fnItem.length) return;

      const noteHtml = $fnItem.html();
      const cleanHtml = noteHtml.replace(/<a[^>]*class="footnote-backref"[^>]*>.*?<\/a>/g, "").trim();

      const $block = $ref.closest("p, li, blockquote, div, figcaption");
      if (!$block.length) return;

      let $insertAfter = $block;
      while ($insertAfter.next().length && $insertAfter.next().hasClass("sidenote")) {
        $insertAfter = $insertAfter.next();
      }
      const $sidenote = $(`<aside class="sidenote" id="${fnId}" role="note">${cleanHtml}</aside>`);
      $insertAfter.after($sidenote);
    });

    $footnotes.prev("hr.footnotes-sep").remove();
    $footnotes.remove();

    const toggleScript =
      "(function(){var btn=document.querySelector('.prose.has-sidenotes .sidenote-toggle');if(!btn)return;btn.addEventListener('click',function(){var p=this.closest('.prose');p.classList.toggle('notes-hidden');this.textContent=p.classList.contains('notes-hidden')?'Show notes':'Hide notes';});})();";
    $article.append($(`<script>${toggleScript}</script>`));

    return $.html();
  });

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
