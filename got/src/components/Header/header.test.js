import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

describe('Testing <Header/>', () => {
  it('Header have rendered correctly', () => {
    const header = shallow(<Header/>);
    expect(header).toMatchSnapshot();
  })
})
