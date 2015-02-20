var React = require('react');
var AppActions = require('../actions/AppActions.js');


var AddTodo = React.createClass({
  getInitialState: function(){
    return { inputText: ''};
  },
  handleInputChange: function(e){
    var newText = e.target.value;
    this.setState({inputText: newText});
  },
  handleSubmit: function(){
    AppActions.addTodo(this.state.inputText);
    this.setState(this.getInitialState());
  },
  render: function(){
    var inputStyle = {
      'marginLeft': '5px'
    };
    return (
     <h4 style={inputStyle}>
       <p>Add a new todo</p>
       <input type='text' 
         onChange={this.handleInputChange}
         value={this.state.inputText}
       />
       <a style={inputStyle} href='#' onClick={this.handleSubmit}>Submit</a>
     </h4>
   );
  }
});

module.exports = AddTodo;
