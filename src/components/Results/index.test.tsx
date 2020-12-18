import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Results from '.'

describe('Results component tests', () => {
  it('renders title', () => {
    render(<Results />);
    const linkElement = screen.getByText(/Results/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Results />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders and snapshot', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Results />, div)
    const component = renderer.create(<Results />)
    expect(component.toJSON()).toMatchSnapshot()
    ReactDOM.unmountComponentAtNode(div)
  })
})
