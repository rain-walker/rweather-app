import { GEOLOCATION_FETCH } from "./actionTypes"
import  getPosition  from "../assets/functions/util";
import Axios from "axios";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const geoFetch = () =>async(dispatch)=> {

        
    try{
    var  res=await getPosition()
    const {latitude,longitude}=res.coords
        
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//        console.log(res,url)
        const data=await Axios(url)
       
        dispatch({
            type:GEOLOCATION_FETCH,
            payload: data.data
        });
    }catch(err){
        console.log(`error in finding location ${err}`)
    }

}
export const cityFetch = (search) =>async(dispatch)=> {

    try{
        const main=await Axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
        dispatch({
            type:GEOLOCATION_FETCH,
            payload: main.data
        });
    }catch(err){
        console.log(`error in finding location ${err}`)
    }
}