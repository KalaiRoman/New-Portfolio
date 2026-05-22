import { combineReducers } from "redux";
import ColorRedcer from './Color_Reducer';
import userClickReducer from './UserClick_reduecr'
const RootReducer = combineReducers({
    login: "reducer",
    colors: ColorRedcer,
    user:userClickReducer
});


export default RootReducer;