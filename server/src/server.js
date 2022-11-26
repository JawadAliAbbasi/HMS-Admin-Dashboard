const express = require("express");
const roomRouter = require('./routers/room');
const cors = require("cors");

require("./db/mongoose");

const app = express();

app.use(cors());


app.use(express.json());

app.all('/*', (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
})

app.use(roomRouter);

port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));