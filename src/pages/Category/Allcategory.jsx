import React,{useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { getFilter } from '../../apis/api/Api';
import Loader from '../../components/loader/Loader';
import MeelList from '../../components/MeelList/MeelList';
const Allcategory = () => {
    const {name} = useParams()
    const [ meels ,setMeels ] = useState([])
    useEffect(()=>{
        getFilter(name)
        .then((data)=>setMeels(data.meals))
    },[name])
    return (
        <>
           <div className='container mt-3'>
           {
              !meels.length ? <div className='d-flex justify-content-center mt-5'><Loader/></div> : <MeelList meels = {meels}/>  
           }
           </div>
        </>
    );
};

export default Allcategory;