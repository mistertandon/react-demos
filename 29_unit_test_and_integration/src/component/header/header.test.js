import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

const setUp = (props = {}) => {

    const component = shallow(<Header />);

    return component
}

describe('Header Component', () => {

    let component;

    beforeEach(() => {

        component = setUp();
    });

    it('Should render without any error', () => {

        // const component = shallow(<Header />);
        const wrapper = component.find(`[data-test='header-component-container']`);

        expect(wrapper.length).toBe(1);
    });

    it('Should render header', () => {

        // const component = shallow(<Header />);
        const wrapper = component.find(`[data-test='header-container']`);

        expect(wrapper.length).toBe(1);
    });

    it('Should render without any error', () => {

        // const component = shallow(<Header />);
        const wrapper = component.find(`[data-test='header-logo']`);

        expect(wrapper.length).toBe(1);
    });
});