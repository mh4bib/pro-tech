import { ADD_CONTENT,/*  ADD_TO_CART, */ LOAD_CONTENT, /* REMOVE_FROM_CART, */ REMOVE_CONTENT } from "../actionTypes/actionTypes"

export const loadContent = (contents) =>{
    return{
        type: LOAD_CONTENT,
        payload: contents
    };
};

export const addContent = (content) =>{
    return{
        type: ADD_CONTENT,
        payload: content,
    };
};

export const removeContent = (id) =>{
    return{
        type: REMOVE_CONTENT,
        payload: id,
    };
};

/* export const addToCart = (content) =>{
    return{
        type: ADD_TO_CART,
        payload: content
    };
};

export const removeFromCart = (content) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: content
    };
}; */