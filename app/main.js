import React from 'react';
import ReactDOM from 'react-dom';

var tempRecipe = {};
var recipes = [
    {
        name: "Martini",
        ingredients: ["gin", "vermouth"]
    }
];

class RecipeBox extends React.Component{

    handleChange(name, e){
        name === "ingredients" ? tempRecipe[name] = e.target.value.split(',') : tempRecipe[name] = e.target.value;
    }
    submit(e) {
        recipes.push(tempRecipe);
        console.log(recipes);
        e.preventDefault();
        ReactDOM.render(
          <RecipeBox recipes={recipes} name="recipe name" ingredients="ingredients" />,
          document.getElementById('content')
        );
    }
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
        <div className="addRecipe">
        <form onSubmit={this.submit.bind(this)}>
          <button> Add Recipe</button>
        </form>
        <input defaultValue={this.props.name} onChange={this.handleChange.bind(this, "name")} ></input>
        <input defaultValue={this.props.ingredients} onChange={this.handleChange.bind(this, "ingredients")} ></input>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <RecipeBox recipes={recipes} name="recipe name" ingredients="ingredients" />,
  document.getElementById('content')
);
