import React, { useState } from 'react';

const Seorch = ({isCall = Function.prototype}) => {
    const [value, setValue] = useState("")

    const isHendleKey = (e) =>{
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }

    const handleSubmit = () =>{
        isCall(value)
    }
    return (
        
            <div className="input-group my-3 w-50 mx-auto">
                <div className="form-outline">
                    <input
                        type="search "
                        id="form1"
                        className="form-control border"
                        value={value}
                        onKeyDown={isHendleKey}
                        onChange={(e)=>setValue(e.target.value) }
                    />
                    <label  className="form-label">Search</label>
                </div>
                <button onClick={handleSubmit} type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>
    );
};

export default Seorch;