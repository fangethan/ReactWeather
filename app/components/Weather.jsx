var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
        }
    },

    handleSearch: function (location) {
        var that = this;
        this.setState({isLoading: true})
        
        openWeatherMap.getTemperature(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false,
            })
        }, function (errorMessage) {
            that.setState({isLoading: false})
            alert(errorMessage)
        })
    },

    render() {
        var {isLoading, location, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}></WeatherMessage>
            }
        }

        return (
            <div>
                <h2>Weather page</h2>     
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
