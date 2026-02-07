module.exports = function (src, alt, caption) {
  const altAttr = alt ? ` alt="${alt}"` : "";
  const cap = caption ? `<figcaption>${caption}</figcaption>` : "";
  return `<figure class="figure"><img src="${src}"${altAttr} loading="lazy" />${cap}</figure>`;
};
