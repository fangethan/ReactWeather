var React = require("react");
var Navigation = require("Navigation")

var Main = (props) => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>Main page</h2>     
            {props.children}
    </div>
    );
}

module.exports = Main;