
export function Reducer (state , {type , payload}){

    switch (type){
        case "SET_CATOLOG" :
            return{
                ...state,
                catolog: payload || []
            }

        case "SET_MEELS" :
            return{
                ...state,
                meels:payload || []
            }
        case "SET_FILTERED" :
            return{
                ...state,
                filtered: payload || []
            }
        default: return state
    }

}