var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants= require('../constants/AppConstants');

// Define action methods
var AppActions = {
  addTodo: function(data){
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_TODO,
      data: data
    });
  },
  deleteTodo: function(index){
    AppDispatcher.handleAction({
      actionType: AppConstants.DELETE_TODO,
      index: index
    });
  },
  updateTodo: function(index, data){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_TODO,
      index: index,
      data: data
    });
  }
};

module.exports = AppActions;
