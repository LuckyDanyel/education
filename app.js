const { Cipher } = require('crypto');
const express = require('express');
const fs = require('fs')
const path = require('path');

const PORT = 5000;

const app = express();

app.set('view engine', 'ejs');

const createPath = (fileName) => path.resolve(__dirname, 'view', `${fileName}.ejs`)

app.use(express.static('view'))

app.listen(PORT, (err) => {
      try {
            console.log(`listening port - ${PORT}`)
      } catch {
            console.log(err);
      }
})

app.use((req, res, next) => {
      res.header({"Access-Control-Allow-Origin": "*"});
      next();
}) 
app.get('', (req, res) => {
      res.render(createPath('index'))
})
app.get('/', (req, res) => {
      res.render(createPath('index'))
})
app.get('/index', (req, res) => {
      res.render(createPath('index'))
})

app.get('/second-page', (req, res) => {
      res.render(createPath('second-page'));
})

app.get('/specific', (req, res) => {
      res.render(createPath('specific'));
})

app.get('/api/rooms', (req, res) => {
      fs.readFile(`${__dirname}/api/rooms.json`, (err, data) =>{
           if(err) {
                 console.log(err);
           } else {
                 console.log("Данные успешно отправлены")
                 res.send(JSON.parse(data));
           }
      })
})




