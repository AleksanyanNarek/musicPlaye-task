import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MusicUploadForm from './MusicUploadForm';

const setSongListDataMock = jest.fn();

const renderComponent = () => render(
    <MusicUploadForm setSongListData={setSongListDataMock} />
);

describe('MusicUploadForm component', () => {
    test('renders without errors', () => {
        renderComponent();
    });

    test('updates input values on user input', () => {
        const { getByLabelText } = renderComponent();

        fireEvent.change(getByLabelText('Song Name'), { target: { value: 'Test Song' } });
        fireEvent.change(getByLabelText('Artist Name'), { target: { value: 'Test Artist' } });

        expect(getByLabelText('Song Name').value).toBe('Test Song');
        expect(getByLabelText('Artist Name').value).toBe('Test Artist');
    });

    test('handles file upload and triggers form submission', async () => {
        const { getByTestId,  getByText } = renderComponent();

        const fileInput = getByTestId('file-label');
        const submitButton = getByText('Upload');

        // Create a sample file
        const sampleFile = new File(['sample file content'], 'sample.mp3', { type: 'audio/mp3' });

        fireEvent.change(fileInput, { target: { files: [sampleFile] } });

        fireEvent.click(submitButton);

        // Wait for the asynchronous upload simulation to complete
        setTimeout(async () => {
            await waitFor(() => expect(setSongListDataMock).toHaveBeenCalled());
        }, 1500)
    });
});