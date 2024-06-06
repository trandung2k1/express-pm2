const express = require('express');
const morgan = require('morgan');
const port = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.get('/', function (req, res) {
    return res.json({ message: 'Hello, world!' });
});
app.listen(port, function () {
    // console.log(`Server listening on http://localhost:${port}`);
});
