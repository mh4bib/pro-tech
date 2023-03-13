import { TOGGLE_REARRANGE, TOGGLE_TAG } from "../actionTypes/actionTypes";

export const initialState = {
    filter: {
        tags: [],
        rearrange: false
    },
    keyword: "",
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAG:
            if (!state.filter.tags.includes(action.payload)) {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        tags: [...state.filter.tags, action.payload]
                    }
                };
            }
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tags: state.filter.tags.filter((tags) => tags !== action.payload)
                }
            };

        case TOGGLE_REARRANGE:
            if (action.payload === "last-upload") {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        rearrange: true
                    }
                }
            }
            else  {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        rearrange: false,
                    }
                }
            }

        default:
            return state;
    }
}