import React from 'react';
import { render } from '@testing-library/react';
import SongRow from './SongRow';

const songMock = {
    songName: "Test Song",
    artistName: "Test Artist",
    trackNumber: 1,
    file: "test_song.mp3"
};

describe('SongRow component', () => {
    test('renders without errors', () => {
        render(<SongRow song={songMock} />);
    });

    test('renders the song information correctly', () => {
        const { getByText } = render(<SongRow song={songMock} />);
        expect(getByText('Test Song')).toBeInTheDocument();
        expect(getByText('Test Artist')).toBeInTheDocument();
        expect(getByText('1')).toBeInTheDocument();
    });
});