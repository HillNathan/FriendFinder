const express = require('express')
const path = require('path')

const app = express()
let data = require('./app/data/friends.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

require('./app/routing/apiroutes.js')(app, data);
require('./app/routing/htmlRoutes.js')(app, data);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });