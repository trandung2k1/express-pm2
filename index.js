const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.get('/', function (req, res) {
    return res.send("Hello World!");
});
app.listen(port, function () {
    console.log(`Server listening on http://localhost:${port}`);
});

module.exports = app