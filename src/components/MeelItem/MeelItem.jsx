import React from 'react';
import { Link } from 'react-router-dom';
const MeelItem = (props) => {
    const {strMeal , strMealThumb ,idMeal} = props
    return (
        <div >
            <div className="card">
                        <img src={strMealThumb} className="card-img-top" alt="Fissure in Sandstone" />
                        <div className="card-body">
                            <h6 className="card-title my-2">{strMeal.slice(0 , 24)}</h6>
                            <Link  to={`/meal/${idMeal}`} className="btn btn-info w-100 ">recipe</Link>
                        </div>
                        
                    </div>
        </div>
    );
};

export default MeelItem;