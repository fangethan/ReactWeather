var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");

var Weather = React.createClass({
    render() {
        return (
            <div>
                <h2>Weather page</h2>     
                <WeatherForm></WeatherForm>
                <WeatherMessage></WeatherMessage>
            </div>
        );
    }
});

module.exports = Weather;
