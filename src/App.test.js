import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock data
const songsDataMock = [
    {
        songName: "Test Song",
        artistName: "Test Artist",
        trackNumber: 1,
        file: "test_song.mp3",
    },
];

describe('App component', () => {
    beforeEach(() => {
        // Reset the mock implementation for each test
        jest.clearAllMocks();
    });

    test('renders without errors', () => {
        // Mock the useState hook to return a dummy state and updater function
        jest.spyOn(React, 'useState').mockReturnValueOnce([songsDataMock, jest.fn()]);

        render(<App />);
    });

    test('renders Header, SongList, and MusicUploadForm components', () => {
        // Mock the useState hook to return a dummy state and updater function
        jest.spyOn(React, 'useState').mockReturnValueOnce([songsDataMock, jest.fn()]);

        const { getByTestId } = render(<App />);

        expect(getByTestId('Header')).toBeInTheDocument();
        expect(getByTestId('SongList')).toBeInTheDocument();
        expect(getByTestId('MusicUploadForm')).toBeInTheDocument();
    });

    test('updates songListData when MusicUploadForm is used', async () => {
        const setSongListDataMock = jest.fn();

        // Mock the useState hook to return a dummy state and updater function
        jest.spyOn(React, 'useState').mockReturnValueOnce([songsDataMock, setSongListDataMock]);

        const { getByLabelText, getByTestId, getByText } = render(<App />);

        const fileInput = getByTestId('file-label');
        const submitButton = getByText('Upload');

        fireEvent.change(getByLabelText('Song Name'), { target: { value: 'Test Song' } });
        fireEvent.change(getByLabelText('Artist Name'), { target: { value: 'Test Artist' } });

        // Create a sample file
        const sampleFile = new File(['sample file content'], 'song_name.mp3', { type: 'audio/mp3' });
        fireEvent.change(fileInput, { target: { files: [sampleFile] } });

        fireEvent.click(submitButton);

        // Wait for the asynchronous upload simulation to complete
        setTimeout(async () => {
            await waitFor(() => {
                expect(setSongListDataMock).toHaveBeenCalled();
                
                expect(songsDataMock).toEqual([
                    {
                        songName: "Test Song",
                        artistName: "Test Artist",
                        trackNumber: 1,
                        file: "test_song.mp3",
                    },
                    {
                        songName: "Song Name",
                        artistName: "Artist Name",
                        trackNumber: 2,
                        file: "song_name.mp3",
                    },
                ]);
            });
        }, 1500)
    });
});
