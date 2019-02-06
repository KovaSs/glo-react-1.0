import React from 'react';
import * as renderer from 'react-test-renderer';
import RandomChar from './index';

describe('Testing <RandomChar/>', () => {
  it('RandomChar have rendered correctly', () => {
    const char = renderer.create(<RandomChar/>).toJSON();
    expect(char).toMatchSnapshot();
  })
})
