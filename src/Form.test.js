import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Form from './Form';
import { shallowToJson } from 'enzyme-to-json';

describe('Rule Details Test Suite', () => {
     let component;
     let props;

    const shallowComponent = async () => {
        component = await shallow(<Form />);
        await component.instance().componentDidMount();
        component.update();
    };

    afterEach(() => {
        component = null;
        props = null;
        jest.clearAllMocks();
        sinon.restore();
    });
    describe('renders', () => {
        it('renders ', async () => {
         shallowComponent();
            expect(component).toBeDefined();
            expect(shallowToJson(component)).toMatchSnapshot();
        });
    });
});