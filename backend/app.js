const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    res.send("HELLO");
});

app.listen(3001);