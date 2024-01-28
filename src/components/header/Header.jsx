import React from 'react'
import './header.css';

import { IoPlay, IoSearch } from "react-icons/io5"
import { FaPlus } from "react-icons/fa6";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { TiArrowSortedDown } from "react-icons/ti";


const Header = () => {

    const playAll = () => {
        // simulate playing all songs 
        console.log("Play All");
    }

    const addAll = () => {
        // simulate adding all songs to queue
        console.log("Add All");
    }

    return (
        <header className='header' data-testid='Header'>
            <div className='header-leftCorner'>
                <button onClick={playAll}>
                    <div className='headerButton-content'>
                        <IoPlay />
                        <p>Play All</p>
                    </div>
                    <div className='arrow-down'>
                        <TiArrowSortedDown />
                    </div>
                </button>
                <button onClick={addAll}>
                    <div className='headerButton-content'>
                        <FaPlus />
                        <p>Add All</p>
                    </div>
                    <div className='arrow-down'>
                        <TiArrowSortedDown />
                    </div>
                </button>
            </div>
            <div className='header-rightCorner'>
                <button className='headerButton-trackNumber'>
                    <div className='headerButton-content'>
                        <PiArrowsDownUpBold />
                        <p>Track Number</p>
                    </div>
                    <div className='arrow-down'>
                        <TiArrowSortedDown />
                    </div>
                </button>
                <div className='header-searchBar'>
                    <IoSearch />
                    <input type="text" placeholder='Filter'/>
                </div>
            </div>
        </header>
    )
}

export default Header