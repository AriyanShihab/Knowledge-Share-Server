const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;
const courses = require("./data/data.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const exactCourse = courses.find((course) => course.id === id);
  res.send(exactCourse);
});
app.get("/featuredCourses", (req, res) => {
  const onlyFeatured = courses.filter((course) => course.isFeatured === true);

  if (!onlyFeatured) {
    res.send("no data found");
  }
  res.send(onlyFeatured);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
