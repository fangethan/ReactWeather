var React = require("react");

var WeatherMessage = React.createClass({
    render() {
        var location = this.props.location;
        var temperature = this.props.temperature;

        return (
            <div>
            <h2>{location} is currently {temperature} degrees</h2>     

            </div>
        );
    }
});

module.exports = WeatherMessage;
