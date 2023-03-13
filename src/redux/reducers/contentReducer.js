import { ADD_CONTENT, /* ADD_TO_CART, */ LOAD_CONTENT, /* REMOVE_FROM_CART, */ REMOVE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    // cart: [],
    content: [],
};

const contentReducer = (state = initialState, action) => {
    // const selectedContent = state.cart.find((content) => content._id === action.payload._id);

    switch (action.type) {
        case LOAD_CONTENT:
            return {
                ...state,
                content: action.payload,
            };
        case ADD_CONTENT:
            return {
                ...state,
                content:[...state.content, action.payload],
            };
        case REMOVE_CONTENT:
            return {
                ...state,
                content:state.content.filter(p=>p._id!==action.payload),
            };
        /* case ADD_TO_CART:
            if (selectedContent) {
                const newCart = state.cart.filter((content) => content._id !== selectedContent._id);
                selectedContent.quantity += 1;
                return {
                    ...state,
                    cart: [...newCart, selectedContent],
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };
        case REMOVE_FROM_CART:
            if (selectedContent.quantity > 1) {
                const newCart = state.cart.filter((content) => content._id !== selectedContent._id);
                selectedContent.quantity -= 1;
                return {
                    ...state,
                    cart: [...newCart, selectedContent],
                };
            }
            return {
                ...state,
                cart: state.cart.filter((content) => content._id !== action.payload._id)
            }; */
        default:
            return state;
    }
}

export default contentReducer;