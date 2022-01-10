import React from 'react';
import { shallow } from 'enzyme';

import {findByTestAttr} from './../../utils/index';

import Headline from './Headline';

const setUp = (props = {}) => {

    const component = shallow(<Headline {...props} />)
}

describe('Test Headline component', () => {

    describe('With props', () => {

        let wrapper;

        beforeEach(() => {

            const propsData = {
                title: 'Lorem Ipsum',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }

            wrapper = setUp()
        });

        it('Should render Headline component without error', () => {


        })

    });
});

