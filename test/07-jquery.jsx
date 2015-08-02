describe('list with jquery', function() {
  var ReactTestUtils = React.addons.TestUtils;
  var List = require('../src/list');

  it('should have 4 list items', function() {
    var list = ReactTestUtils.renderIntoDocument(<List />).getDOMNode();
    // var items = ReactTestUtils.scryRenderedDOMComponentsWithTag(list, 'li');
    // expect(items.length).toBe(4);
    // expect(items[0].getDOMNode().textContent).toBe('Docs');
    // expect(items[3].getDOMNode().textContent).toBe('Blog');
    expect($(list).find('li').length).toBe(4);
    expect($(list).find('li:first-child').text()).toBe('Docs');
    expect($(list).find('li:last-child').text()).toBe('Blog');
  });

  it('should have 1 active item', function() {
    var list = ReactTestUtils.renderIntoDocument(<List />).getDOMNode();
    // var items = ReactTestUtils.scryRenderedDOMComponentsWithClass(list, 'active');
    // expect(items.length).toBe(1);
    // expect(items[0].getDOMNode().textContent).toBe('Docs');
    expect($(list).find('.active').length).toBe(1);
    expect($(list).find('.active').text()).toBe('Docs');

  });

});