var React = require("react");
var PropTypes = require('prop-types');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: "Error",
        }
    },
    propTypes: {
        title: PropTypes.string,
        message: PropTypes.string.isRequired,
    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();  
    },

    render() {
        var {title, message} = this.props;

        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{this.props.title}</h4>
                <p>{this.props.message}</p>
                <p>
                    <button className="button hollow" data-close="">Ok</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;
