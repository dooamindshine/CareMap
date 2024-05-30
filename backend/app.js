const express = require('express');
const app = express();
const cors =  require("cors");
var routes = require('./routes');
const port = 8000;
require('dotenv').config();

const db = require('./db');

const corsConfigs = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsConfigs));
app.use(express.json());




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', routes);


// // Example route to fetch data from the database
// app.get('/users', (req, res) => {
//   db.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       console.error('Error fetching users:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     res.json(results);
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
