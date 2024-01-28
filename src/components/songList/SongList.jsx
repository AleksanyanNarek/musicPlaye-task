import React from 'react';
import './songList.css';

import SongRow from '../songRow/SongRow';

const SongList = ({ songListData }) => {

    return (
        <table className='songList' data-testid='SongList'>
            <thead className='songList-header'>
                <tr>
                    <th></th>
                    <th>Song Name</th>
                    <th>Artist Name</th>
                    <th>Track</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='songList-body'>
                {
                    songListData.map((song, index) => {
                        return (
                            <SongRow song={song} key={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default SongList