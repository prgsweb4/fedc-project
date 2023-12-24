import React from 'react';
import { shallow } from 'enzyme';
import LocalStorageWriterComponent from './LocalStorageWriterComponent';

describe('LocalStorageWriterComponent', () => {
  it('writes to local storage when the button is clicked', () => {
    const wrapper = shallow(<LocalStorageWriterComponent />);
    const button = wrapper.find('#writeButton');
    button.simulate('click');

    expect(localStorage.setItem).toHaveBeenCalledWith('exampleKey', 'exampleValue');
  });
});