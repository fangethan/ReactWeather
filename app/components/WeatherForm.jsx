var React = require("react");

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;
        
        if (location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location)
        }
    },

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Enter the city name" />
                    <button className="button expanded hollow">Get Weather</button>
                </form>    

            </div>
        );
    }
});

module.exports = WeatherForm;
