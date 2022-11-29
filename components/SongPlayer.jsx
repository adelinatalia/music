import React, { useRef } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';

export default function SongPlayer({ audioRef, playing, setPlaying, currentSong, setCurrentSong, songs }) {
    const clickRef = useRef();

    const PlayPause = () => {
        setPlaying(!playing);
    }


    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const progressBar = offset / width * 100;
        audioRef.current.currentTime = progressBar / 100 * currentSong.length;
    }

    const skipBack = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);
        if (index == 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        audioRef.current.currentTime = 0;
    }


    const skipToNext = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);

        if (index == songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        audioRef.current.currentTime = 0;
    }

    return (
        <div className='player_container'>
            {/* <div className="title">
                <p>{currentSong.title}</p>
            </div> */}
            <div className="navigation">
                <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
                    <div className="seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
                </div>
            </div>
            <div className="controls">
                {/* <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack} /> */}
                {playing ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause} /> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause} />}
                {/* <BsFillSkipEndCircleFill className='btn_action' onClick={skipToNext} /> */}
            </div>
        </div>
    )
}
