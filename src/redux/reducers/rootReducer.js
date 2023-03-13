import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import contentReducer from "./contentReducer";

const rootReducer = combineReducers({
    contents: contentReducer,
    filters: filterReducer,
});

export default rootReducer;