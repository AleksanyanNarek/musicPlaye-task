import React from 'react'
import './songRow.css';

import { RiDraggable } from "react-icons/ri";
import { IoPlay } from "react-icons/io5";

import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

const SongRow = ({ song }) => {

    
    return (
        <tr className='songRow' data-testid='song-row'>
            <td>
                <div className='songRow-firstCol'>
                    <RiDraggable />
                    <IoPlay />
                </div>
            </td>
            <td>{song.songName}</td>
            <td>{song.artistName}</td>
            <td>{song.trackNumber}</td>
            <td>
                <div className='songRow-lestCol'>
                    <FaHeart />
                    <FaCheck />
                    <IoMdShareAlt />
                    <TiArrowSortedDown />
                </div>
            </td>
        </tr>
    )
}

export default SongRow