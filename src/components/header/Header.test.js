import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    test('renders without errors', () => {
        render(<Header />);
    });

    test('clicking "Play All" button calls playAll function', () => {
        const { getByText } = render(<Header />);
        const playAllButton = getByText('Play All');
        const spy = jest.spyOn(console, 'log');

        fireEvent.click(playAllButton);

        expect(spy).toHaveBeenCalledWith('Play All');
        spy.mockRestore();
    });

    test('clicking "Add All" button calls addAll function', () => {
        const { getByText } = render(<Header />);
        const addAllButton = getByText('Add All');
        const spy = jest.spyOn(console, 'log');

        fireEvent.click(addAllButton);

        expect(spy).toHaveBeenCalledWith('Add All');
        spy.mockRestore();
    });
});