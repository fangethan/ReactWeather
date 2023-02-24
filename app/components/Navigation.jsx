var React = require("react");
var {Link} = require("react-router");

var Navigation = React.createClass({
    render() {
        return (
            <div>
                <h2>Navigation page</h2>     
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = Navigation;