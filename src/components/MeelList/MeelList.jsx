import React from 'react';
import MeelItem from '../MeelItem/MeelItem';

const MeelList = ({meels = []}) => {
    return (
        <div className='card-grid'>
                {
                    meels.map((item) =>{
                        return <MeelItem key={item.idMeal} {...item}/>
                    })
                }
        </div>
    );
};

export default MeelList;