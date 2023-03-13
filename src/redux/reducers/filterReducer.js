import { TOGGLE_BRAND, TOGGLE_REARRANGE } from "../actionTypes/actionTypes";

export const initialState = {
    filter: {
        tags: [],
        rearrange: false
    },
    keyword: "",
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BRAND:
            if (!state.filter.tags.includes(action.payload)) {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        tags: [...state.filter.tags, action.payload]
                    }
                };
            }
            else {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        tags: state.filter.tags.filter((tags) => tags !== action.payload)
                    }
                };
            }

        case TOGGLE_REARRANGE:
            if (action.payload === "first-upload") {
                return state;
            }
            else{
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        rearrange: !state.filter.rearrange,
                    }
                }
            }

        default:
            return state;
    }
}