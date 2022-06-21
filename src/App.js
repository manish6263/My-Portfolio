const express = require('express');
const cors = require('cors');
require('dotenv').config();

//database connection......
require('./database/connection');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware function......
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes........
// app.get('/', (req, res) => {
//   res.send(`<h1>Hello World</h1>`)
// });

app.use('/contact', require('./routes/contact'));
app.use('/recommendation', require('./routes/recommendation'));
app.use('/skill', require('./routes/skill'));
app.use('/project', require('./routes/projects'));
app.use('/blog', require('./routes/blogs'));

//for heroku deployment.......
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//Listening the express app.....
app.listen(PORT, () => {
  console.log(`Express app listening at PORT ${PORT}`);
});