var React = require("react");

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        // api id b033f1a6906e208563565acfe60cf05a

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
                    <input type="text" ref="location" placeholder="Enter the city name" />
                    <button>Get Weather</button>
                </form>    

            </div>
        );
    }
});

module.exports = WeatherForm;
