import React, { Component } from "react";
import style from './recipe.module.css'
const Recipe = ({ title, calories, image, ingredients,time }) => {
  var sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className={style.recipe} style={sectionStyle} >
     <h1 > {title} </h1>
     <h2>Time : {time}</h2>
     <hr style={{ clear: "both" }}/>

     <div className={style.recipeContent} > 
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ) )}
      </ol>
      <p> Calories : {calories} </p>
      <img className={style.image} src={image}  alt="" />
      </div>
    </div>
  );
};

export default Recipe;
