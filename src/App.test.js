import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

describe('App component', () => {
  it('should render Redirect without crashing', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
