const express = require('express');
const app = express();
const cors =  require("cors");
var routes = require('./routes');
const port = 8000;
require('dotenv').config();
var cron = require('node-cron');

const db = require('./db');
const seedData = require("./scheduler/seed");

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

//every month first day midnight
//cron.schedule('0 0 1 * *', seedData);

//seedData()

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
