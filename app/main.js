import React from 'react';
import ReactDOM from 'react-dom';

var recipes = [
    {
        name: "Martini",
        ingredients: ["gin", "vermouth"]
    }
];

class RecipeBox extends React.Component{
  render() {
      var recipeList = this.props.recipes.map((recipe)=>{
          return(
          <div className="recipe">
            <ul>
                <li>Recipe:<ul><li>{recipe.name}</li></ul></li> <li>Ingredients:<ul>{recipe.ingredients.map((item)=>{
                    return (
                        <li>{item}</li>
                    );
                })}</ul></li>
            </ul>
          </div>
      );
      });
    return (
      <div className="recipeBox">
        Recipe Box
        {recipeList}
        <AddRecipe />
      </div>
    );
  }
}

class AddRecipe extends React.Component{
    handleClick : () =>{
        
    },
  render() {
    return (
      <div className="addRecipe">
      <button onClick={this.handleClick}>Add Recipe</button>
      <input defaultValue="recipe name here"></input>
      <input defaultValue="ingredient1, ingredient2, .."></input>
      </div>
    );
  }
}

ReactDOM.render(
  <RecipeBox recipes={recipes} />,
  document.getElementById('content')
);
