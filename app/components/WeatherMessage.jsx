var React = require("react");

var WeatherMessage = React.createClass({
    render() {
        var location = this.props.location;
        var temp = this.props.temp;

        return (
            <div>
            <h2>{location} is currently {temp} degrees</h2>     

            </div>
        );
    }
});

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h2>{location} is currently {temp} degrees</h2>     
        </div>
    );
}

module.exports = WeatherMessage;
