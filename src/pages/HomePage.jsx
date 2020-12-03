import React, { Component } from 'react'
import { connect } from 'react-redux'
import Widget from '../components/Widget';
import {geoFetch,cityFetch} from "../redux/weatherActions";
class HomePage extends Component {
    componentDidMount(){
        if (this.props.match.params.cityId) {
            this.props.cityFetch(this.props.match.params.cityId)
        }
        else{
            this.props.geoFetch()
        }
        
    }
    componentDidUpdate(nextProps, nextState){
        if (nextProps.location.pathname!==this.props.location.pathname) {
            if (this.props.match.params.cityId) {
                this.props.cityFetch(this.props.match.params.cityId)
            }
            else{
                this.props.geoFetch()
            }
            
          }
    }
    render() {
        return this.props.weatherDetails?(
            <Widget weatherData={this.props.weatherDetails}></Widget>
        ):<h1>Loading...</h1>
    }
}

const mapStateToProps = (storeState) => {
    return {weatherDetails:storeState.weatherState.weather}
}


export default connect(mapStateToProps, {geoFetch,cityFetch})(HomePage)
