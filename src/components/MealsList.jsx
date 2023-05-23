import { Link } from "react-router-dom";
import classes from "../styles/MealsList.module.css"

const MealList = ({ props }) => {
    console.log(props)
return(
    <div>
       { props.map((item) => {
                return(<Link to={"/meals/"+item.idMeal}>
                    <div className={classes.listDiv}>
                    <div>
        <img className={classes.listImg} src={item.strMealThumb} alt="" />
                    </div>
                    <div>
        <b className={classes.textBlack}>{item.strMeal}</b>
        <p className={classes.textBlack}>{item.strCategory} | {item.strArea}</p>
                    </div>
                    </div>

                </Link>)
})
}
</div>

)



};

export default MealList;
