import { ADD_CONTENT,ADD_TO_HISTORY,/*  ADD_TO_CART, */ LOAD_CONTENT, /* REMOVE_FROM_CART, */ REMOVE_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

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

export const updateContent = (content) =>{
    return{
        type: UPDATE_CONTENT,
        payload: content,
    };
};

 export const addToHistory = (content) =>{
    return{
        type: ADD_TO_HISTORY,
        payload: content
    };
};

/*
export const removeFromCart = (content) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: content
    };
}; */