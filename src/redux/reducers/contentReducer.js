import { ADD_CONTENT, ADD_TO_HISTORY, /* ADD_TO_CART, */ LOAD_CONTENT, /* REMOVE_FROM_CART, */ REMOVE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    content: [],
    history: [],
};

const contentReducer = (state = initialState, action) => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString("default", { month: "short" })} ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    const selectedContent = state.history.find((content) => content._id === action.payload._id);

    switch (action.type) {
        case LOAD_CONTENT:
            return {
                ...state,
                content: action.payload,
            };
        case ADD_CONTENT:
            return {
                ...state,
                content: [...state.content, action.payload],
            };
        case REMOVE_CONTENT:
            return {
                ...state,
                content: state.content.filter(p => p._id !== action.payload),
            };
        case ADD_TO_HISTORY:
            if (selectedContent) {
                const newHistory = state.history.filter((content) => content._id !== selectedContent._id);
                selectedContent.lastRead = formattedDate;
                return {
                    ...state,
                    history: [...newHistory, selectedContent],
                };
            }
            return {
                ...state,
                history: [...state.history, { ...action.payload, lastRead: formattedDate }],
            };
        /*case REMOVE_FROM_CART:
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