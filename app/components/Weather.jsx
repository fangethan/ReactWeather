var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: "Miami",
            temperature: 88,
        }
    },

    handleSearch: function (location) {
        this.setState({
            location: location,
            temperature: 23,
        })
    },

    render() {
        var location = this.state.location;
        var temperature = this.state.temperature;

        return (
            <div>
                <h2>Weather page</h2>     
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                <WeatherMessage location={location} temperature={temperature}></WeatherMessage>
            </div>
        );
    }
});

module.exports = Weather;
