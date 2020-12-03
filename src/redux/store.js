import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(ThunkMiddleware)))