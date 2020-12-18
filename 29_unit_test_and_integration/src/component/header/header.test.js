import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('Header Component', () => {

    it('Should render without any error', () => {

        const component = shallow(<Header />);
        const wrapper = component.find(`[data-test='header-component-container']`);

        expect(wrapper.length).toBe(1);
    });
});