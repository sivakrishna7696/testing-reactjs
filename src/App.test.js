import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import App from './App'


Enzyme.configure({ adapter: new Adapter() });



describe('addition of 2+2',()=>{
  test('i want 2+2 is 4',()=>{
    expect(2+2).toBe(4);
  })

  test('4+2 should be 6',()=>{
      expect(4+2).toBe(6)
  })

})



describe('Testing App Component',()=>{
  test('is count is 0 initially',()=>{
    const wrapper = shallow(<App/>)
    const counterText = wrapper.find('p').text();
    expect(counterText).toBe('count:0')
  })

 
  test('increment teh count by 1',()=>{
    const wrapper = shallow(<App/>);
    const incrementButton = wrapper.find('button.increment');
    incrementButton.simulate('click');
    const countText = wrapper.find('p').text();
    expect(countText).toBe('count:1');
  })

})
