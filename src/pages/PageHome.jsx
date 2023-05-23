import { Link} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import classes from "../styles/pageHome.module.css"
import SearchBlocks from "../components/SearchBlocks"




const PageHome = (data)=>{
    const [meal,setMeal]=useState({})
    useEffect(()=>{
        const getRepos= async()=>{
            try{
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
                setMeal(response.data.meals[0])
            }
            catch(error){
                console.log(error)
            }
                
            }
        getRepos()
    },[])

    console.log(meal)


    return(
        <div className={classes.home}>
            <div className={classes.mealOfDay}>
            <div>
                <h2>Meal of the Day</h2>
                <Link to={"/meals/"+meal.idMeal}><h1 className={classes.mealTitle}>{meal.strMeal}</h1></Link>
                <p>{meal.strCategory+"|"+meal.strArea}</p>
            </div>
            <div>
<img className={classes.mealImg} src={meal.strMealThumb} alt="" />
</div>
            </div>

        <SearchBlocks/>

        </div>
    )
}

export default PageHome