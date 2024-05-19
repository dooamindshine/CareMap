const express = require('express');
const app = express();
const port = 8000;
require('dotenv').config();

const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example route to fetch data from the database
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
