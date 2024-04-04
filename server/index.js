const express = require('express');
const routes = require('./router/route');
const cors = require('cors');
const bodyParser = require('body-parser');
const connecting = require('./utils/database')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/', routes);

connecting();

const PORT = 8000;


app.listen(PORT , () => console.log(`Server listening on ${PORT}`));
