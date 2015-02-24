var React = require('react');

var DisplayView = React.createClass({
  componentDidMount: function() {
    this.props.model.on('change', function() {
      this.forceUpdate();
    }.bind(this));
  },

  render: function() {
    return (
      <p>
        {this.props.model.get('name')}
      </p>
    );
  }
});

module.exports = DisplayView;