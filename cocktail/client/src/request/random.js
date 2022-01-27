import React from 'react';
import axios from 'axios';

export default class Random extends React.Component {
  state = {
    newCocktail: {}
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/cocktail`, {
        responseType: "json",
    })
      .then(res => {
        const newCocktail = res.data.drinks[0]
        console.log(res.data.drinks[0].strDrink);
        this.setState({newCocktail});
      }).catch(err =>{
          
        console.log(err);
      })
  }

  render() {
    return (
        <div>
            <h1>{this.state.newCocktail.strDrink}</h1>
            <ul>
                
            </ul>
        </div>
    )
  }
}