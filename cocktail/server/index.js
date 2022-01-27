const express = require('express');
const axios = require('axios');

const router = express.Router();
const app = express();

const port = 3000

app.get('/api/cocktail', (req, res) => {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(function (response) {
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

