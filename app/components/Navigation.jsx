var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navigation = React.createClass({
    render() {
        return (
            <div>
                <h2>Navigation page</h2>     
                <Link to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</Link>
                <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</IndexLink>
                <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</IndexLink>
            </div>
        );
    }
});

module.exports = Navigation;