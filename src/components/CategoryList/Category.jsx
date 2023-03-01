import React from 'react';
import CategotyItem from '../CategoryItem/CategotyItem';
const Category = ({catolog}) => {
    return (
        <div className='card-grid '>
               { catolog.map((item) =>{  return <CategotyItem key={item.id}  {...item}/> })}
        </div>
    );
};

export default Category;