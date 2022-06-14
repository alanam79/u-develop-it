const express = require("express");
const db = require("./db/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Add near the top of the file - when not specificed, the app will default to index, its the universal default
const apiRoutes = require('./routes/apiRoutes');

// express middlewarre
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes - Add after Express middleware
app.use("/api", apiRoutes);

// Default response for any other request (not found), this is a very important catchall, so must be the last route
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.❤️");
  // starts server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}🚀`);
  });
});

