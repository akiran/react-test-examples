// renderIntoDocument method
// Test content, style, classes

describe('hello component', function() {
  var ReactTestUtils = React.addons.TestUtils;
  var Hello = require('../src/hello');

  it('should say hello world', function() {
    var hello = ReactTestUtils.renderIntoDocument(<Hello />);
    expect(hello.getDOMNode().textContent).toBe('Hello World');
  });

  it('should say hello john', function() {
    var hello = ReactTestUtils.renderIntoDocument(<Hello name='John' />);
    expect(hello.getDOMNode().textContent).toBe('Hello John');
  });
  
  it('should have width 100', function() {
    var hello = ReactTestUtils.renderIntoDocument(<Hello />);
    expect(hello.getDOMNode().style.width).toBe('100px');
  });

  it('should have a hello class', function() {
    var hello = ReactTestUtils.renderIntoDocument(<Hello />);
    expect(hello.getDOMNode().className).toBe('hello');
  });
});