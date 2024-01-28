import React from 'react';
import { render } from '@testing-library/react';
import SongList from './SongList';

const songsDataMock = [
    {
        songName: "Bohemian Rhapsody",
        artistName: "Queen",
        trackNumber: 1,
        file: "bohemian_rhapsody.mp3"
    },
    {
        songName: "Like a Rolling Stone",
        artistName: "Bob Dylan",
        trackNumber: 2,
        file: "rolling_stone.mp3"
    },
];

describe('SongList component', () => {
    test('renders without errors', () => {
        render(<SongList songListData={songsDataMock} />);
    });

    test('renders the table headers', () => {
        const { getByText } = render(<SongList songListData={songsDataMock} />);
        expect(getByText('Song Name')).toBeInTheDocument();
        expect(getByText('Artist Name')).toBeInTheDocument();
        expect(getByText('Track')).toBeInTheDocument();
    });

    test('renders the correct number of SongRow components', () => {
        const { getAllByTestId } = render(<SongList songListData={songsDataMock} />);
        const songRows = getAllByTestId('song-row');
        expect(songRows.length).toBe(songsDataMock.length);
    });
});