const express = require('express');
let router = require('./routes/movieRoutes');

var app = express();
app.use(router);
app.use(express.json());               //middleware which is use to access request body pipeline.
app.set('view engine', 'ejs')

const port = process.env.PORT || 4000;


app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

