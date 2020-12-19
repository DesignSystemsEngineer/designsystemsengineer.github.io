import lessons from "./_lessons.js";

const contents = JSON.stringify(
  lessons.map((lesson) => {
    return {
      title: lesson.title,
      slug: lesson.slug,
      summary: lesson.summary,
      courseSlug: lesson.courseSlug,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
