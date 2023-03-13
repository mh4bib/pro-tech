import { TOGGLE_REARRANGE, TOGGLE_TAG } from "../actionTypes/actionTypes"

export const toggleTag = (tag)=>{
    return{
        type: TOGGLE_TAG,
        payload: tag,
    };
};

export const toggleRearrange = (rearrange)=>{
    return{
        type: TOGGLE_REARRANGE,
        payload: rearrange,
    };
};