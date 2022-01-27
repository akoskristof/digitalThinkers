const express = require('express');
const axios = require('axios');
const cors = require('cors');

const router = express.Router();
const app = express();
app.use(cors());

const port = 4000;

app.get('/api/cocktail', (req, res) => {
    const search = req.query.name;

    // decide which url should we send request to.
    url = "http://www.thecocktaildb.com/api/json/v1/1/random.php";
    if (search != null) url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search;

    // send request
    axios.get(url)
        .then(function (response) {
            // allow testing
            res.header("Access-Control-Allow-Origin", "http://localhost:3000");
            var info = {
                name: response.data.drinks[0].strDrink,
                ingredients: getIngredients(response.data.drinks[0]),
                instructions: response.data.drinks[0].strInstructions,
                thumbnail: response.data.drinks[0].strDrinkThumb
            };
            res.send(info);
            console.log(info);
        })
        .catch(function (error) {
            console.log(error);
        })
})

// get ingredients from json response.
function getIngredients(data){
    arr = [];
    for (let i = 1; i < 15; i++) {
        if (data["strIngredient"+i] != null)
            arr.push(data["strIngredient"+i]);
        else break;
    }
    return arr;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

