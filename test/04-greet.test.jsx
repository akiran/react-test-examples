// Shallow rendering

describe('shallow rednering', function() {
  var ReactTestUtils = React.addons.TestUtils;
  var Greet = require('../src/greet');
  var Hello = require('../src/hello');

  it('should be empty', function() {
    var shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(<Greet names={['john', 'doe']} />);
    var output = shallowRenderer.getRenderOutput()

    expect(output.type).toBe('div');

    expect(output.props.children.length).toBe(2);
    expect(output.props.children[0].props).toEqual({name: 'john'});
    expect(output.props.children[1].props).toEqual({name: 'doe'});
    
  });
  
});