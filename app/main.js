import React from 'react';
import ReactDOM from 'react-dom';

var recipes = [
    {
        name: "Martini",
        ingredients: ["gin", "vermouth"]
    }
];

class CommentBox extends React.Component{
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
      <div className="commentBox">
        Recipe Box
        {recipeList}
        <Box />
      </div>
    );
  }
}

class Box extends React.Component{
  render() {
    return (
      <div className="box">
      Add Recipe
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox recipes={recipes} />,
  document.getElementById('content')
);
