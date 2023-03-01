import React from 'react';
import { Link} from 'react-router-dom';
const CategotyItem = (props) => {
    const {strCategoryThumb ,strCategory, idCategory ,strCategoryDescription} = props
    return (
        <div className='mt-3'>
             <div className="card">
                        <img src={strCategoryThumb} className="card-img-top" alt="Fissure in Sandstone" />
                        <div className="card-body">
                            <h5 className="card-title">{strCategory}</h5>
                            <p className="card-text">{strCategoryDescription.slice(0 , 55)}...</p>
                            <Link to ={`/category/${strCategory}`} className="btn btn-success w-100 ">category</Link>
                        </div>
                        
                    </div>
        </div>
    );
};

export default CategotyItem;