var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants.js');
var _ = require('underscore');

// Define initial data points
var todos =  window.todos || [];

function addTodo(text){
  todos.push({
    text: text, 
    complete: false
  })
}

function updateTodo(todoIndex, updateData){
  todos[todoIndex] = updateData
}

function deleteTodo(index){
  todos.splice(index, 1);
}

var TodoStore = _.extend({}, EventEmitter.prototype, {

  getTodos: function(){
    return todos;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  if(action.actionType === AppConstants.ADD_TODO){
    addTodo(action.data)
  } else if(action.actionType === AppConstants.DELETE_TODO){
    deleteTodo(action.index);
  } else if(action.actionType === AppConstants.UPDATE_TODO){
    updateTodo(action.index, action.data);
  }
  TodoStore.emitChange();
  return true;
});

module.exports = TodoStore;
