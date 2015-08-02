// scryRenderedDOMComponentsWithTag
// scryRenderedDOMComponentsWithClass
// findRenderedDOMComponentWithClass

describe('list', function() {
  var ReactTestUtils = React.addons.TestUtils;
  var List = require('../src/list');

  it('should have 4 list items', function() {
    var list = ReactTestUtils.renderIntoDocument(<List />);
    var items = ReactTestUtils.scryRenderedDOMComponentsWithTag(list, 'li');
    expect(items.length).toBe(4);
    expect(items[0].getDOMNode().textContent).toBe('Docs');
    expect(items[3].getDOMNode().textContent).toBe('Blog');
  });

  it('should have 1 active item', function() {
    var list = ReactTestUtils.renderIntoDocument(<List />);
    var items = ReactTestUtils.scryRenderedDOMComponentsWithClass(list, 'active');
    expect(items.length).toBe(1);
    expect(items[0].getDOMNode().textContent).toBe('Docs');
  });
  
  //find return only one match and scry returns an array
  it('should have 1 active item', function() {
    var list = ReactTestUtils.renderIntoDocument(<List />);
    var activeItem = ReactTestUtils.findRenderedDOMComponentWithClass(list, 'active');
    expect(activeItem.getDOMNode().textContent).toBe('Docs');
  });

});