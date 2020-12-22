import React from 'react';
import { shallow } from 'enzyme';

import {findByTestAttr} from './../../utils/index';
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

        const headerComponentContainer = findByTestAttr(component, 'header-container');

        expect(headerComponentContainer.length).toBe(1);
    });

    it('Should render header', () => {

        const headerContainer = findByTestAttr(component, 'header');

        expect(headerContainer.length).toBe(1);
    });

    it('Should render logo', () => {

        const logo = findByTestAttr(component, 'logo');

        expect(logo.length).toBe(1);
    });
});