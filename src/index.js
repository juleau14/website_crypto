const express = require("express");
const routes = require("./routes");
const path = require("path");


app = express();

app.use(express.static(path.join(__dirname, "static/")));
app.use(routes);

app.listen(3000, () => {
    console.log("Listening on port 3000 !");
})