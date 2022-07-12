import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profilePage";
import messagesReducer from './messagesPage';
import sidebarReducer from './sidebar';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
});
let store = createStore(reducers);

export default store;