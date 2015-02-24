var Backbone = require('backbone');

var ExampleModel = Backbone.Model.extend({
  defaults: {
    name: 'Example (Before User Intervention)'
  },
  
  eventHandlers: {
    setName: function(model, name){
      model.set({name: name});
    }
  }

});

module.exports = ExampleModel;