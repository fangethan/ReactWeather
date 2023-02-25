var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
        }
    },

    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
        })
        
        openWeatherMap.getTemperature(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false,
            })
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message,
            })
        })
    },

    render() {
        var {isLoading, location, temp, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}></WeatherMessage>
            }
        }

        function renderError() {
            if(typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage} />
                )
            }
        }

        return (
            <div>
                <h2 className="text-center">Get Weather</h2>     
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
