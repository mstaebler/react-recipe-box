import React from 'react';
import ReactDOM from 'react-dom';

class RecipeBox extends React.Component{
    constructor() {
        super();
        var objString = JSON.stringify({
            recipeArray: [
                {
                id: 0,
                name: "Martini",
                ingredients: ["gin", "vermouth"]
                }
            ],
            input1 : '',
            input2 : '',
            editID: null,
            vis : ["hide"]
        });
        this.state = JSON.parse(localStorage.getItem('_recipe_store') || objString);

    }
    handleChange(value, e){
        value === "ingredients" ? this.setState({input2: e.target.value}) : this.setState({input1: e.target.value});
    }
    submit(id ,e) {
        var array = this.state.recipeArray;
        var updatedObj = {id: array.length,name: this.state.input1,ingredients:this.state.input2.split(',')};
        this.state.vis.push("hide");
        if(id !== null){
            array[id] = updatedObj;
            this.setState({
                editID: null
            });
        }else {
            array.push(updatedObj);
        }
        this.setState({
            recipeArray: array,
            input1:'',
            input2:''
        });
        localStorage.setItem('_recipe_store', JSON.stringify(this.state));
        e.preventDefault();
    }
    delete(id, e){
        var array = this.state.recipeArray;
        array.splice(id,1);
        this.setState({
            recipeArray: array
        });
    }
    edit(id, e){
        var recp = Object.assign({},this.state.recipeArray[id]);
        this.setState({
            input1:recp.name,
            input2:recp.ingredients,
            editID:id
        });
    }
    toggle(id,e){
        var arr = this.state.vis;
        arr[id]==="hide" ? arr[id]="show" : arr[id]="hide";
        this.setState({vis:arr});
    }
    render() {

    var recipeList = this.state.recipeArray.map((recipe)=>{

          return(
              <div className="recipe">
                <ul>
                    <li><button onClick={this.edit.bind(this, recipe.id)}>edit</button></li>
                    <li><button onClick={this.delete.bind(this, recipe.id)}>X</button></li>
                    <li>Recipe:<a href='#' onClick={this.toggle.bind(this, recipe.id)}>{recipe.name}</a></li><li><div className={this.state.vis[recipe.id]}>Ingredients:<ul>{recipe.ingredients.map((item)=>{
                        return (
                            <li>{item}</li>
                        );
                    })}</ul></div></li>
                </ul>
              </div>
          );
        });
        return (
          <div className="recipeBox">
            Recipe Box
            {recipeList}
            <div className="addRecipe">
            <form onSubmit={this.submit.bind(this, this.state.editID)}>
              <button>Submit Recipe</button>
            </form>
            <input value={this.state.input1} placeholder={this.props.name} onChange={this.handleChange.bind(this, "name")} ></input>
            <input value={this.state.input2} placeholder={this.props.ingredients} onChange={this.handleChange.bind(this, "ingredients")} ></input>
            </div>
          </div>
    );
  }
}
ReactDOM.render(
  <RecipeBox name="recipe name" ingredients="ingredients , seperated" />,
  document.getElementById('content')
);
