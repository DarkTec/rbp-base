// Link.react.test.js
import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from "./";


it('Form elements all render correctly', () => {
    const { queryByPlaceholderText, queryByText } = render(
        <LoginForm />,
    );

    expect(queryByPlaceholderText(/Email/i)).toBeTruthy();
    expect(queryByPlaceholderText(/Password/i)).toBeTruthy();
    expect(queryByText(/CLick/i)).toBeTruthy();
});