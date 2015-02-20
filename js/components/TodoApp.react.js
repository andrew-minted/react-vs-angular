var React = require('react');

//Flux Components
var TodoStore = require('../stores/TodoStore');

//Child Components
var TodoItem = require('./TodoItem.react.js');
var AddTodo = require('./AddTodo.react.js');

// Method to retrieve state from Stores
function getStateFromStores() {
  return {
    todos: TodoStore.getTodos()
  };
}

// Define main Controller View
var TodoApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getStateFromStores();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
    var cTodos = this.state.todos.map(function(todo, index){
      return <TodoItem key={index} idx={index} data={todo}/> 
    });
  	return (
        <div>
          <h3>Todo List</h3>
          <AddTodo/>
          <ul>
            {cTodos}
          </ul>
        </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = TodoApp;
