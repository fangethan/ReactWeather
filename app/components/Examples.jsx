var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples page</h1>     
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Melbourne,au">Melbourne, Australia</Link>
                </li>
                <li>
                    <Link to="/?location=Melbourne,us">Melbourne, USA</Link>
                </li>
                <li>
                    <Link to="/?location=Paris">Paris, France</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;
