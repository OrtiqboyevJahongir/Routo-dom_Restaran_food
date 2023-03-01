import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const RecepeList = ({ recip }) => {
    const [isChenge , setChenge] = useState(false)
    const goBack = useNavigate()

    const isHendle = () =>{
        setChenge(!isChenge)
    }
    return (
        <div>
            <div className="card">
                <div className="row g-0 ">
                    <div className="col-md-4 mt-4">
                        <img 
                            src={recip[0].strMealThumb}
                            alt="Trendy Pants and Shoes"
                            className="img-fluid rounded-start"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">{recip[0].strMeal}</h5>
                                <button className="btn btn-success " onClick={() => goBack("/category/Beef")} >go back</ button>
                            </div>
                            <h6 className="card-text">
                                {recip[0].strCategory}
                            </h6>
                            <h6 className="card-title">{recip[0].strArea ? recip[0].strArea : null}</h6>
                            <p className="card-text">
                                <small className="text-muted">{recip[0].strInstructions.slice(0,1400)}</small>
                            </p>
                        </div>
                    </div>
                </div>
                    <button onClick={()=>isHendle()} className="btn btn-info mx-auto mt-3">All recipe</button>
                <div className={isChenge ? "is-none" : "none"}>
                <table className='table text-center mt-5 '>
                    <thead>
                        <tr>
                            <th scope="col ">Ingridiend</th>
                            <th scope="col ">Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recip[0]).map(key =>{
                                if (key.includes("Ingredient") && recip[0][key]) {
                                    return(
                                        <tr>
                                        <th >{recip[0][key]}</th>
                                        <td>{recip[0][`strMeasure${key.slice(13)}`]}</td>
                                      </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
                </div>

                {
                    recip[0].strYoutube ? (<div className=' mx-auto my-5'>
                        <h5 className='text-center mb-3'>Video Recipe</h5>
                        <iframe width="350" height="250" src={`https://www.youtube.com/embed/${recip[0].strYoutube.slice(-11)}`} allowFullScreen frameborder="0" />
                    </div>) : null
                }
            </div>
        </div>
    );
};

export default RecepeList;