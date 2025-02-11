// server.js
const app = require("./src/app");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
