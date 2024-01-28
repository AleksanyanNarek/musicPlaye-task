import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import MusicUploadForm from './components/musicUploadForm/MusicUploadForm';
import SongList from './components/songList/SongList';

import { songsData } from './data';

function App() {

    const [songListData, setSongListData] = useState(songsData);

    return (
        <div className='app'>
            <Header />
            <SongList songListData={songListData} />
            <MusicUploadForm setSongListData={setSongListData} />
        </div>
    );
}

export default App;
