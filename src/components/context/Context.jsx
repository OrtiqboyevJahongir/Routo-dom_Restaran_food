import { createContext, useReducer } from "react";
import {Reducer} from "../reducer/Reducer"
export const FoodContext = createContext()

    const initialState = {
        catolog : [],
        filtered : []
    }
 export const ContextProvider = ({children}) =>{
    const [value , dispatch] = useReducer( Reducer , initialState )

    value.setCatolog = (data) =>{
        dispatch({ type : "SET_CATOLOG" , payload:data })
    }
    value.setMeels = (data) =>{
        dispatch({ type : "SET_MEELS" , payload:data })
    }
    value.setFiltered = (data) =>{
        dispatch({type: "SET_FILTERED" ,payload:data })
    }

    return (
        <FoodContext.Provider value={value}>
            {children}              
        </FoodContext.Provider>
    )
 }
