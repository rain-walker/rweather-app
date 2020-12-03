import { combineReducers } from "redux";
import { weatherReducer } from "./WeatherReducer";
export const rootReducer=combineReducers({
    weatherState:weatherReducer
})