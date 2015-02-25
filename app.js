(function() {
  angular.module('todoApp', [])
  .controller('todosCtrl', ['$scope', function($scope) {
    $scope.newTask = null;
    $scope.addTask = function(taskText) {
      var newTask = {
        text: taskText,
        isComplete: false
      };
      $scope.todos.push(newTask)
      $scope.newTask = null;
    };

    $scope.todos = [
      { text: 'Create a React todo list', isComplete: false },
      { text: 'Create an Angular todo list', isComplete: false },
      { text: 'Demo how unit testing in angular works', isComplete: false },
    ]
  }]);

})();
