import 'react-native';

import { render } from '@testing-library/react-native';
import React, { ReactElement } from 'react';

import App from '../App';

// let props;
let component: ReactElement;

describe('[Temp] render', () => {
    // props = {}; // fill test props
    component = <App />;

    test('renders without crashing', () => {
        const rendered = render(component);
        expect(rendered).toMatchSnapshot();
        expect(rendered).toBeTruthy();
    });
});
