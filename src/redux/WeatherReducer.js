import { GEOLOCATION_FETCH, SEARCH_FETCH } from "./actionTypes"

const initialState = {
weather:null
}

export const weatherReducer=(state = initialState, { type, payload }) => {
    switch (type) {

    case GEOLOCATION_FETCH:
        return { ...state, weather:payload }

    case SEARCH_FETCH:
        return { ...state, weather:payload }

    default:
        return state
    }
}
export default weatherReducer