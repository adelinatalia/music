import { useState, useEffect } from 'react'
import starter from '../pages/api/starter'
import Image from 'next/image'
import imgDefault from '@/img/img-default.PNG'

export default function Songs() {
    const [searchValue, setSearchValue] = useState('')
    const [music, setMusic] = useState('')

    async function getMusic() {
        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${searchValue}&limit=20&media=music`)
            const jsonData = await response.json()
            if (jsonData.resultCount > 0) {
                setMusic(jsonData.results)
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
        </div>
    )
}
