import React, { useEffect, useContext } from 'react';
import { getAllCatigories } from "../../apis/api/Api"
import Category from '../../components/CategoryList/Category';
import {FoodContext } from '../../components/Context/Context';
import Loader from '../../components/loader/Loader';
import Seorch from '../../components/Seorch/Seorch';
const index = () => {
    const { setCatolog,catolog , filtered , setFiltered} = useContext(FoodContext)

    const handleSeorch = (str) =>{
        setFiltered(catolog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    }

    useEffect(() => {
        getAllCatigories().then(data => {
            setCatolog(data.categories)
            setFiltered( data.categories ) 
        })
    }, [])

  
    
    return (
        <>
            <div className='container '>
                <Seorch isCall ={handleSeorch}/>
             {
                catolog.length ? <Category catolog = {filtered}/> : <div className='d-flex justify-content-center mt-5' ><Loader/></div> 
            }
            </div>
        </>
    );
};

export default index;