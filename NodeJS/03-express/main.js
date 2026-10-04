const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // using this we can make public folder accessible to all and in public folder we can paste our public file

//app.get ,app.post, app.delete and app.put are the methods
app.get("/", (req, res) => {
  res.send("Hello World!2");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog!");
});

// using slug we can use get value from parameter of the url
app.get("/blog/:slug", (req, res) => {
  // URL is :http://localhost:3000/blog/kenil?mode=dark
  // console.log(req); // get the full request object
  console.log(req.params); // will output{ slug: 'kenil' }
  console.log(req.query); // will output{ mode: 'dark' }
  res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
