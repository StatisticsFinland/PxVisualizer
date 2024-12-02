import React from 'react';
import { render } from '@testing-library/react';
import { Icon} from './icon';

it('renders correctly', () => {
    const { asFragment } = render(<Icon icon={'Times'} />);
    expect(asFragment()).toMatchSnapshot();
});
