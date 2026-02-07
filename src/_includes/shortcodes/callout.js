module.exports = function (content, type) {
  const types = ["note", "warning", "example", "tip"];
  const kind = types.includes(type) ? type : "note";
  return `<div class="callout callout--${kind}" role="note"><div class="callout__content">${content}</div></div>`;
};
