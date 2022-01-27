import React from 'react';
import axios from 'axios';

export default class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCocktail: {
                name: null,
                ingredients:[],
                instructions: null,
                thumbnail: null
            }
        };
        console.log(props);
        
        
    }

    componentDidMount() {
        const sp = new URLSearchParams(window.location.search.substr(1));
        
        console.log(":"+sp.get("name"+":"));
        var url = "";
        if (sp.has("name") == false && sp.get("name") == null) url = 'http://localhost:4000/api/cocktail';
        else url = `http://localhost:4000/api/cocktail?name=${sp.get("name")}`;
        
        axios.get(url, {
            responseType: "json",
        })
        .then(res => {
        const newCocktail = res.data;
        this.setState({newCocktail});
        }).catch(err =>{
            console.log(err);
        })
    }

  render() {
    return (
        <div>
            <img src={this.state.newCocktail.thumbnail}></img>

            <h1>{this.state.newCocktail.name}</h1>
            <h2>Ingredients:</h2>
            <ol>
            {this.state.newCocktail.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
            ))}
            </ol>
            <h2>Instructions: {this.state.newCocktail.instructions}</h2>
        </div>
        
    )
  }
}