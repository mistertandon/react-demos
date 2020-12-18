import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

const setUp = (props = {}) => {

    const component = shallow(<Header />);

    return component
}

const findByTestAttr = (component, attr) => {

    const wrapper = component.find(`[data-test='${attr}']`);

    return wrapper
}

describe('Header Component', () => {

    let component;

    beforeEach(() => {

        component = setUp();
    });

    it('Should render without any error', () => {

        const headerComponentContainer = findByTestAttr(component, 'header-component-container');

        expect(headerComponentContainer.length).toBe(1);
    });

    it('Should render header', () => {

        const headerContainer = findByTestAttr(component, 'header-container');

        expect(headerContainer.length).toBe(1);
    });

    it('Should render without any error', () => {

        const logo = findByTestAttr(component, 'header-logo');
        
        expect(logo.length).toBe(1);
    });
});