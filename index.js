const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const errorMiddleware = require('./middleware/error');

const charactersRouter = require('./routes/characters');

const app = express();

app.use(bodyParser());
app.use(cors());

app.use('/characters', charactersRouter);

app.use(errorMiddleware);

app.use(function (err, req, res, next) {
    return res.status(500).json({
        status: 500,
        message: err.toString(),
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`);
});
