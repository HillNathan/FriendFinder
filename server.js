const express = require('express')

const app = express()
let data = require('./app/data/friends.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiroutes.js')(app, data);
require('./app/routing/htmlRoutes.js')(app, data);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });