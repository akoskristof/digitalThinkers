import React from 'react';
import axios from 'axios';

export default class Random extends React.Component {
    constructor() {
        super();
        this.state = {
            newCocktail: {
                name: null,
                ingredients:[],
                instructions: null,
                thumbnail: null
            }
        };
    }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/cocktail`, {
        responseType: "json",
    })
      .then(res => {
        const newCocktail = res.data
        console.log(newCocktail.thumbnail);
        this.setState({newCocktail});
      }).catch(err =>{
          
        console.log(err);
      })
  }

  render() {
    return (
        <div>
        <div style={{ 
            backgroundImage: `url('${this.state.newCocktail.thumbnail}')` 
          }}>

            <h1>{this.state.newCocktail.name}</h1>
            <h2>Ingredients:</h2>
            <ol>
            {this.state.newCocktail.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
            ))}
            </ol>
            <h2>Instructions: {this.state.newCocktail.instructions}</h2>
        </div>
        
        </div>
    )
  }
}