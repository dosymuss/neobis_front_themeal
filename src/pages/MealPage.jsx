import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "../styles/mealPage.module.css";

const API_FOR_SEARCH = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const MealPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  useEffect(() => {
    const showAllMeal = async () => {
      try {
        const response = await axios.get(API_FOR_SEARCH + id);
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    showAllMeal();
  }, []);

  console.log(meal.strYoutube);

  return (
    <div className={classes.home}>
      <div className={classes.mealOfDay}>
        <div>
          <div className={classes.mealName}>
            <div>
              <h1 className={classes.mealTitle}>{meal.strMeal}</h1>
              <p>{meal.strCategory + "|" + meal.strArea}</p>
              
              <div className={classes.mealList}>
                <p>
                  {meal.strIngredient1} <b>{meal.strMeasure1}</b>
                </p>
                <p>
                  {meal.strIngredient1} <b>{meal.strMeasure1}</b>
                </p>
                <p>
                  {meal.strIngredient1} <b>{meal.strMeasure1}</b>
                </p>
                <p>
                  {meal.strIngredient2} <b>{meal.strMeasure2}</b>
                </p>
                <p>
                  {meal.strIngredient3} <b>{meal.strMeasure3}</b>
                </p>
                <p>
                  {meal.strIngredient4} <b>{meal.strMeasure4}</b>
                </p>
                <p>
                  {meal.strIngredient5} <b>{meal.strMeasure5}</b>
                </p>
                <p>
                  {meal.strIngredient6} <b>{meal.strMeasure6}</b>
                </p>
                <p>
                  {meal.strIngredient7} <b>{meal.strMeasure7}</b>
                </p>
                <p>
                  {meal.strIngredient8} <b>{meal.strMeasure8}</b>
                </p>
                <p>
                  {meal.strIngredient9} <b>{meal.strMeasure9}</b>
                </p>
                <p>
                  {meal.strIngredient10} <b>{meal.strMeasure10}</b>
                </p>
                <p>
                  {meal.strIngredient11} <b>{meal.strMeasure11}</b>
                </p>
                <p>
                  {meal.strIngredient12} <b>{meal.strMeasure12}</b>
                </p>
                <p>
                  {meal.strIngredient13} <b>{meal.strMeasure13}</b>
                </p>
                <p>
                  {meal.strIngredient14} <b>{meal.strMeasure14}</b>
                </p>
                <p>
                  {meal.strIngredient15} <b>{meal.strMeasure15}</b>
                </p>
                <p>
                  {meal.strIngredient16} <b>{meal.strMeasure16}</b>
                </p>
                <p>
                  {meal.strIngredient17} <b>{meal.strMeasure17}</b>
                </p>
                <p>
                  {meal.strIngredient18} <b>{meal.strMeasure18}</b>
                </p>
                <p>
                  {meal.strIngredient19} <b>{meal.strMeasure19}</b>
                </p>
                <p>
                  {meal.strIngredient20} <b>{meal.strMeasure20}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={classes.mealImg} src={meal.strMealThumb} alt="" />
        </div>
      </div>
      <div>
        <h2>Instruction</h2>
        <p>{meal.strInstructions}</p>
        <a className={classes.mealBtn} target="_blak" href={meal.strYoutube}>
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default MealPage;
