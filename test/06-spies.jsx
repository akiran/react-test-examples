// Spies to test function calls

describe('counter spies', function() {
  var ReactTestUtils = React.addons.TestUtils;
  var Counter = require('../src/counter');

  it('should call setCount when clicked', function() {
    var setCount = jasmine.createSpy('setCount');
    var counter = ReactTestUtils.renderIntoDocument(<Counter setCount={setCount}/>);
    counter.clickHandler();
    expect(setCount).toHaveBeenCalledWith(1);
  });

});