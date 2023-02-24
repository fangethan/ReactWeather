var React = require("react");
var Navigation = require("Navigation")

var Main = React.createClass({
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <h2>Main page</h2>     
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;