import React, { useRef, useState } from 'react'
import './musicUploadForm.css';

import { PiFileAudio } from "react-icons/pi";

const MusicUploadForm = ({ setSongListData }) => {
    
    const fileInputRef = useRef(null);
    
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [musicData, setMusicData] = useState({
        songName: "",
        artistName: "",
        file: undefined
    });
    const [uploading, setUploading] = useState(false)


    const handleInputChange = (e) => {
        // change value of text inputs
        setMusicData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        if (!musicData.songName.trim() || !musicData.artistName.trim()) { // delete spaces and check is have text
            setMusicData(prev => ({
                ...prev, 
                songName: musicData.songName.trim(), // delete spaces from inputs
                artistName: musicData.artistName.trim()
            }))
            return; // cancel sumbiting
        }

        setUploading(true);

        // submit form after some time to make impression of async upload
        setTimeout(() => {
            setSongListData(prev => ([ // push new song
                ...prev,
                {
                    songName: musicData.songName,
                    artistName: musicData.artistName,
                    trackNumber: prev.length + 1,
                    file: musicData.file
                }
            ]));
    
            setMusicData({ // make form empty
                songName: "",
                artistName: "",
                file: undefined
            })

            fileInputRef.current.value = null; // delete input value to be ably choose same file again
            setUploading(false);

            console.log("file uploads")
        }, 1500)
    }

    const putFileInState = (file) => { // callback to add file in state
        setMusicData((prev) => ({ ...prev, file }));
    }

    const uploadFile = async (e) => {
        const file = e.target.files[0];

        if (!file) return; // Check, if the user didn't select or selected of the wrong type file stops function
        if (file.type.split('/')[0] !== "audio") return;

        simulateProgress(() => putFileInState(file)); //give callback which will add file in state
    };
      
    const simulateProgress = (onComplete) => {
        const totalSteps = 5;
        const interval = 100; // ms
      
        // simulate progress: every step will call nextStep and last one will call callback and add file in state
        const simulateStep = (step) => {
            setTimeout(() => {
                const progress = Math.round((step / totalSteps) * 100);
                setUploadPercentage(progress);
        
                if (step === totalSteps) {
                    onComplete();
                    setUploadPercentage(0);
                    return;
                }
                    
                simulateStep(step + 1);
            }, interval);
        };
      
        simulateStep(1);
    };
      

    return (
        <section className='musicUploadForm-section' data-testid='MusicUploadForm'>
            <h2>Upload the file of your favorite song</h2>
            <form className='musicUploadForm' aria-label='music-upload-form' onSubmit={submitForm}>
                <div className='musicUploadForm-inputs'>
                    <label htmlFor="songName" className='musicUploadForm-label'>
                        <h5>Song Name</h5>
                        <input
                            type='text'
                            name='songName'
                            id='songName'
                            placeholder='Type here song name'
                            required
                            onChange={handleInputChange}
                            value={musicData.songName}
                        />
                    </label>
                    <label htmlFor="artistName" className='musicUploadForm-label'>
                        <h5>Artist Name</h5>
                        <input
                            type='text'
                            name='artistName'
                            id='artistName'
                            placeholder='Type here artist name'  
                            required
                            onChange={handleInputChange}
                            value={musicData.artistName}
                        />
                    </label>
                </div>
                <div className="musicUploadForm-uploadFile">
                    <label htmlFor="music-file" className='musicUploadForm-fileLabel'>
                        <input
                            type="file"
                            name="music-file"
                            id="music-file"
                            accept="audio/*"
                            ref={fileInputRef}
                            hidden
                            onChange={uploadFile}
                            data-testid='file-label'
                        />
                        <div className='musicUploadForm-fileContent'>
                            <PiFileAudio />
                            {uploadPercentage
                                ? <h4>{uploadPercentage}%</h4>
                                : <h4>{musicData.file?.name || "Select file"}</h4>
                            }
                        </div>
                    </label>
                </div>
                <button disabled={!musicData.file}>{uploading ? "Uploading..." : "Upload"}</button>
            </form>
        </section>
    )
}

export default MusicUploadForm