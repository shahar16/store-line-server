const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorsHandler = require("./middlewares/errors");
const users = require("./routes/users.rout");
const products = require("./routes/product.rout")
const Store = require("./routes/store.rout")
const TestEnv = require('./routes/initValues.rout');
const app = express();

app.use('/uploads', express.static('uploads'));
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log("Server got a request");
    next();
});

app.use("/users", users);
app.use("/products", products);
app.use("/store", Store);
app.use("/testEnv", TestEnv);

// An Error middleware, all error that will be thrown will be catched here.
app.use(errorsHandler);

module.exports = app;