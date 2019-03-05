import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);

  const wrapper = shallow(<App />);
  const title = <h4>ReactJS Unit Test Case With Jest and Enzyme.</h4>;

  expect(wrapper.contains(title)).toEqual(true);
});
