import { TOGGLE_BRAND, TOGGLE_REARRANGE, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const toggleBrand = (tagsName)=>{
    return{
        type: TOGGLE_BRAND,
        payload: tagsName,
    };
};

export const toggleRearrange = (rearrange)=>{
    return{
        type: TOGGLE_REARRANGE,
        payload: rearrange,
    };
};