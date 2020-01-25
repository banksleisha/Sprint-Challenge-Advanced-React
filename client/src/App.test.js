import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  console.log(wrapper.debug());
});

test('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(/soccer/i)
  expect(element).toBeInTheDocument()

})
