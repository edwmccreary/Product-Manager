const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

//allow client to make requests from backend
app.use(cors());

//trigger mongoose.connect statement to init db connection
require("./server/config/mongoose.config");

//handle post requests
app.use(express.json(), express.urlencoded({ extended: true }));

//routes go here
const testRoutes = require("./server/routes/test.routes")(app);
const productRoutes = require("./server/routes/product.routes")(app);

app.listen(port, ()=>console.log("server is running on port "+port));