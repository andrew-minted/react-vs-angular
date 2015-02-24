var expect = require('chai').expect;

// Create a fake global `window` and `document` object:
// Note: This must be required before React
require('../test-helpers/testdom')('<html><body></body></html>');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Backbone = require('backbone');
var sinon = require('sinon');

describe('ToggleView Component', function() {
  // Require React Component that we will be testing
  var ToggleView = require('./ToggleView.component.jsx');

  // Create a Backbone Model Stub
  var TestModel = Backbone.Model.extend({
    eventHandlers: {
      setName: function(model, name) {
        return null;
      }
    }
  });

  // Define variables that we will be re-using in unit tests
  var testModel;
  var toggleView;
  var button;

  beforeEach(function(){
    // Create new instance of test model
    testModel = new TestModel();

    // Render a ToggleView Component into the Document
    toggleView = TestUtils.renderIntoDocument(
      <ToggleView model={testModel} name="Bob" />
    );

    // Create reference to button whose output we will be testing
    button = TestUtils.findRenderedDOMComponentWithTag(toggleView, 'button');
  });

  it('renders the components name prop to the button', function() {
    expect(button.getDOMNode().textContent).to.equal('Change Name to Bob');
  });

  it('triggers the correct model event handler when button is clicked', function(){
    //instrument the model's event handler method so we can check if it's called
    var spy = sinon.spy(testModel.eventHandlers, 'setName');

    expect(spy.called).to.equal(false);
    TestUtils.Simulate.click(button);
    expect(spy.called).to.equal(true);
  });
});