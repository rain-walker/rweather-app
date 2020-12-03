import React, { Component } from 'react'
import "../assets/css/Widget.css"
import { dateConverter, timeConverter } from '../assets/functions/dateUtil'
import { kToC } from '../assets/functions/tempUtil'
export class Widget extends Component {
    render() {
        console.log("hey"+JSON.stringify(this.props.weatherData.coord))
        return (
            <>
            <section className="basics">
        <div className="basics-city">{this.props.weatherData.name},{this.props.weatherData.sys.country}</div>
        <div className="basics-day">{dateConverter(parseInt(this.props.weatherData.dt))}</div>
      </section>
      <section className="weather">
        <div className="weather-half">
          <div className="weather-status">
            <div
              className="weather-status-image"
              style=
              {{  backgroundImage: "url("+`http://openweathermap.org/img/wn/${this.props.weatherData.weather[0].icon}@2x.png)`
              }}
            ></div>
            <div className="weather-status-report">
            <div className="weather-status-report-temperature">{kToC(this.props.weatherData.main.temp)}&deg;</div>
              <div className="weather-status-report-atmosphere">{this.props.weatherData.weather[0].main}</div>
            </div>
          </div>
        </div>
        <div className="weather-half weather-details">
          <div className="weather-details-report">
            <div className="weather-details-report-value">{kToC(this.props.weatherData.main.temp_min)}&deg;</div>
            <div className="weather-details-report-name">High</div>
          </div>
          <div className="weather-details-report">
            <div className="weather-details-report-value">{this.props.weatherData.wind.speed}mph</div>
            <div className="weather-details-report-name">Wind</div>
          </div>
          <div className="weather-details-report">
            <div className="weather-details-report-value">{timeConverter(this.props.weatherData.sys.sunrise)}</div>
            <div className="weather-details-report-name">Sunrise</div>
          </div>
          <div className="weather-details-report">
            <div className="weather-details-report-value">{kToC(this.props.weatherData.main.temp_max)}&deg;</div>
            <div className="weather-details-report-name">Low</div>
          </div>
          <div className="weather-details-report">
            <div className="weather-details-report-value">{this.props.weatherData.clouds.all}%</div>
            <div className="weather-details-report-name">Rain</div>
          </div>
          <div className="weather-details-report">
            <div className="weather-details-report-value">{timeConverter(this.props.weatherData.sys.sunset)}</div>
            <div className="weather-details-report-name">Sunset</div>
          </div>
        </div>
      </section>
      </>
        )
    }
}

export default Widget
