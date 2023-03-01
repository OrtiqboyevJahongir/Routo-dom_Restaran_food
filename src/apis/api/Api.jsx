import { API_URL } from "../Config/Config";

const getMelId = async (mealId) =>{
        const response = await fetch(API_URL + "lookup.php?i=" + mealId)
        return await response.json()
}

const getAllCatigories = async () =>{
    const respons = await fetch(API_URL + "categories.php")
    return await respons.json()
}

const getFilter = async (categoryName) =>{
    const respons = await fetch(API_URL + "filter.php?c=" + categoryName)
    return await respons.json()
}

export {getMelId , getAllCatigories , getFilter}