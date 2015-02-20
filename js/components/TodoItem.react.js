var React = require('react');
var AppActions = require('../actions/AppActions.js');

var TodoItem = React.createClass({
  handleInputChange: function(){
    var data = this.props.data;
    data.complete = !data.complete;
    AppActions.updateTodo(this.props.idx, data);
  },
  render: function(){
    var data = this.props.data;
    var inputStyle = {
      marginLeft: '10px'
    };
    var spanStyle ={}; 
    if(this.props.data.complete){
      spanStyle['text-decoration'] = 'line-through';
    }
    return (
      <li>
        <span style={spanStyle}>
          {data.text}        
          <input style={inputStyle} 
            onChange={this.handleInputChange} 
            type='checkbox' checked={data.complete}
          />
        </span>
      </li>
    );
  }
});

module.exports = TodoItem;
