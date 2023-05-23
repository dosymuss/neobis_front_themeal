import axios from "axios";
import { useEffect, useState } from "react";
import MealList from "./MealsList";
import classes from "../styles/serachBlocks.module.css"
const API_FOR_SEARCH = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const SearchBlocks = () => {
  const [search, setSearch] = useState("");
  const [click, setClick] = useState("no");
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const ShowSearch = async () => {
      try {
        const response = await axios.get(API_FOR_SEARCH + search);
        setMeals(response.data.meals)
      } catch (error) {
        console.log(error);
      }
    };
    ShowSearch();

    setClick("no");
  }, [click]);



  return (
    <div>
        <h1>Find your meal</h1>
        <div >
        <input className={classes.searchInp} placeholder="find your meal"type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className={classes.searchBtn} onClick={(e) => {setClick("yes");}}>search</button>
        </div>

    <div>
        {
            search=="" 
            ?
            <div></div>
            :       
            <div>
            <MealList props={meals}/>
            </div>
        }

    </div>
    </div>



  );
};

export default SearchBlocks;
