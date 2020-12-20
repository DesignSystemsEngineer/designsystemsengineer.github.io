import units from "./_units.js";

const contents = JSON.stringify(
  units.map((unit) => {
    return {
      title: unit.title,
      slug: unit.slug,
      summary: unit.summary,
      videoCount: unit.videoCount,
      duration: unit.duration,
      description: unit.description,
      lessons: unit.lessons,
      image: unit.image,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
