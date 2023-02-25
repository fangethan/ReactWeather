var React = require("react");
var CountryCodeTable = require("./CountryCodeTable");

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a react weather app where user can retrieve the current weather of a certain location</p>     
            <p>Here are some of the tools I use</p>
            <ul>
                <li>
                    <a href="https://openweathermap.org/">Open Weather Map</a> I use open weather map to to search for weather data
                </li>
            </ul>
        </div>

        
    );
}

module.exports = About;
