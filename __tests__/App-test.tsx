import 'react-native';

import React, { ReactElement } from 'react';
import { render } from '@testing-library/react-native';
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
