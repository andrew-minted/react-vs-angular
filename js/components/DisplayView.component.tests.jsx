var expect = require('chai').expect;

// Create a fake global `window` and `document` object:
// Note: This must be required before React
require('../test-helpers/testdom')('<html><body></body></html>');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Backbone = require('backbone');

describe('DisplayView Component', function() {
  // Require React Component that we will be testing
  var DisplayView = require('./DisplayView.component.jsx');

  // Create a Backbone Model Stub
  var TestModel = Backbone.Model.extend({
    defaults: {
      name: 'Test Model Name Before Model Change'
    }
  });

  // Define variables that we will be re-using in unit tests
  var testModel;
  var displayView;
  var paragraph;

  beforeEach(function(){
    // Create new instance of test model
    testModel = new TestModel();

    // Render a DisplayView Component into the Document
    displayView = TestUtils.renderIntoDocument(
      <DisplayView model={testModel} />
    );

    // Create reference to paragraph whose output we will be testing
    paragraph = TestUtils.findRenderedDOMComponentWithTag(displayView, 'p');
  });

  it('renders the initial model name to paragraph', function() {
    expect(paragraph.getDOMNode().textContent).to.equal('Test Model Name Before Model Change');
  });

  it('re-renders the correct text upon model change events', function(){
    expect(paragraph.getDOMNode().textContent).to.equal('Test Model Name Before Model Change');
    testModel.set({name: 'Test Model Name After Model Change'});
    expect(paragraph.getDOMNode().textContent).to.equal('Test Model Name After Model Change');
  });
});