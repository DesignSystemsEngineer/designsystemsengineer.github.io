module.exports = () => {
  const now = new Date();
  return { buildTime: now, year: now.getFullYear() };
};
