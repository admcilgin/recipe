import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./Example";
import Recipe from "./Recipe";

const App = () => {
    const APP_ID = "c44130dd";
    const APP_KEY = "371c5842401e12ed93aa2bbbde6b0f43";
    const exReg =
        "https://api.edamam.com/search?q=chicken&app_id=c44130dd&app_key=371c5842401e12ed93aa2bbbde6b0f43";

    const [counter, setCounter] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('patatos');
    useEffect(() => {
        console.log("effect run");
        getRecipes();
    }, [query]);
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=c44130dd&app_key=371c5842401e12ed93aa2bbbde6b0f43`);
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
        console.log(data.hits);
    };
    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch} >
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
         {recipes.map(recipe => (
             <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
             />
         ))}
         </div>
           
        </div>
    );
}

export default App;
