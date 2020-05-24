import {combineReducers, createStore} from "redux";
import login_reducer from "./reducers/login_reducer";

let reducers = combineReducers({
    login_reducer
});

let store = createStore(reducers);

export default store;