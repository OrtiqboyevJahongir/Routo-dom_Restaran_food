import React,{useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getMelId} from "../../apis/api/Api"
import Loader from '../../components/loader/Loader';
import RecepeList from '../../components/RecepList/RecepeList';
const Recepi = () => {
    const {id} = useParams()
    const [recip , setRecip] = useState([])
        console.log(recip);
        useEffect(()=>{
            getMelId(id)
            .then((data)=>setRecip(data.meals))
        },[id])
    
    return (
        <div className='container'>
            {
                recip.length ? <RecepeList recip = {recip}/> : <div className='d-flex justify-content-center mt-5'><Loader/></div>
            }
        </div>
    );
};

export default Recepi;