const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// express middlewarre
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // your mysql password
    password: "Mae,hN2Ab-O-",
    database: "election",
  },
  console.log("Connected to the election database!❤️")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });



// Default response for any other request (not found), this is a very important catchall, so must be the last route
app.use((req, res) => {
  res.status(404).end();
});

// starts server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}🚀`);
});
