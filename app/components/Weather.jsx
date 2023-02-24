var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("../api/openWeatherMap");

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: "Miami",
            temp: 88,
        }
    },

    handleSearch: function (location) {
        var that = this;
        openWeatherMap.getTemperature(location).then(function (temp) {
            that.setState({
                location: location,
                temp, temp,
            })
        }, function (errorMessage) {
            alert(errorMessage)
        })
    },

    render() {
        var location = this.state.location;
        var temp = this.state.temp;

        return (
            <div>
                <h2>Weather page</h2>     
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                <WeatherMessage location={location} temp={temp}></WeatherMessage>
            </div>
        );
    }
});

module.exports = Weather;
