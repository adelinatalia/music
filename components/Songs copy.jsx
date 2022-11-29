// import { useState, useEffect } from 'react'
import { useRef, useState, useEffect } from 'react';
import { songsData } from '../pages/api/defaultSongs';
import songsData1 from '../pages/api/starter'

import Image from 'next/image'
import imgDefault from '@/img/img-default.PNG'
import SongPlayer from './SongPlayer'

export default function Songs() {
    console.log("songsData[previewUrl]", songsData1["previewUrl"]);

    const [searchValue, setSearchValue] = useState('')
    const [music, setMusic] = useState('')

    // const [songs, setSongs] = useState(songsData);
    // const [playing, setPlaying] = useState(false);
    // const [currentSong, setCurrentSong] = useState(songsData[1]);

    // const [currentSong, setCurrentSong] = useState(songsData[1].previewUrl);
    // const [currentSong, setCurrentSong] = useState(songsData["previewUrl"]);

    // const audioRef = useRef();

    // useEffect(() => {
    //     if (playing) {
    //         audioRef.current.play();
    //     }
    //     else {
    //         audioRef.current.pause();
    //     }
    // }, [playing])

    // const onPlaying = () => {
    //     const duration = audioRef.current.duration;
    //     const ct = audioRef.current.currentTime;

    //     setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
    // }

    async function getMusic() {
        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${searchValue}&limit=20&media=music`)
            const jsonData = await response.json()
            if (jsonData.resultCount > 0) {
                setMusic(jsonData.results)
                // setCurrentSong(jsonData.results.previewUrl)
            }
            console.log("data:", jsonData)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMusic()
    }, [searchValue])

    console.log("music:", music);

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className="song__form">
                <input type="text" placeholder='suche nach Song...' onChange={(e) => setSearchValue(e.target.value)} />
            </form>



            <ul className='song__list flex-row'>
                {music && music.map(({ artistName, trackName, previewUrl, trackCensoredName, artworkUrl100, trackViewUrl, primaryGenreName, artistId }) => {
                    return <li key={artistId} className='song__item flex-column'>
                        {/* <Image src={imgDefault}
                            alt={trackName}
                            width="120"
                            height="120"
                            className='song__image'
                        /> */}
                        <img
                            alt={trackName}
                            src={artworkUrl100}
                            width="120"
                            height="120"
                            className='song__image'
                        />
                        <h3>{artistName}</h3>
                        <p>{trackName}</p>
                        <a href={previewUrl} className="song__play-btn">play</a>
                        <p className='genre'>{primaryGenreName}</p>


                        {/* <div className="player">
                            <audio src={previewUrl} ref={audioRef} onTimeUpdate={onPlaying} />
                            <SongPlayer songs={songs} setSongs={setSongs} playing={playing} setPlaying={setPlaying} audioRef={audioRef} currentSong={currentSong} setCurrentSong={setCurrentSong} />
                        </div> */}

                        {/* {artworkUrl100 !== "" ?
                            <img
                                alt={trackName}
                                src={artworkUrl100}
                                width="120"
                                height="120"
                                className='song__image'
                            />
                            :
                            <img
                                alt={trackName}
                                src={imgDefault}
                                width="120"
                                height="120"
                                placeholder="blur"
                                className='song__image'
                            />
                        } */}
                    </li>
                })
                }
            </ul>

            {/* <div className="player">
            <audio src={currentSong.url} ref={audioRef} onTimeUpdate={onPlaying} />
            <SongPlayer songs={songs} setSongs={setSongs} playing={playing} setPlaying={setPlaying} audioRef={audioRef} currentSong={currentSong} setCurrentSong={setCurrentSong} />
</div> */}
        </div>
    )
}
