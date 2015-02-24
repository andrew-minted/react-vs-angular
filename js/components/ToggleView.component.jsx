var React = require('react');

var ToggleView = React.createClass({
  handleClick: function() {
    this.props.model.eventHandlers['setName'](this.props.model, this.props.name);
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>
        Change Name to {this.props.name}
      </button>
    );
  }
});

module.exports = ToggleView;