const express = require('express');
const axios = require('axios');
const cors = require('cors');

const router = express.Router();
const app = express();
app.use(cors());

const port = 4000;

app.get('/api/cocktail', (req, res) => {

    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(function (response) {
            res.header("Access-Control-Allow-Origin", "http://localhost:3000");
            res.send(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

