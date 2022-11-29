import { useRef, useState, useEffect } from 'react';
// import { useDebouncedValue } from '@/hooks/useDebouncedValue';

export default function Artist() {
    const [searchValue, setSearchValue] = useState('')
    const [artist, setArtist] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [musicTitle, setMusicTitle] = useState('')

    const media = useRef()

    async function getArtist() {
        // const debouncedValue = useDebouncedValue(searchValue, 700)

        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${searchValue}&limit=10&media=musicVideo`)
            const jsonData = await response.json()
            if (jsonData.resultCount > 0) {
                setArtist(jsonData.results)
            }
            console.log("data:", jsonData.results)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getArtist()
    }, [searchValue])


    const openMedia = (url, title) => {
        if (!url) return;
        setVideoURL(url);
        setMusicTitle(title);
    }

    const closeMedia = () => {
        media.innerHTML = '';
        // toggleOverlay();
        media.classList.add('hidden');
    }


    return (
        <div className='artist'>
            <form onSubmit={(e) => e.preventDefault()} className="song__form">
                <input type="text" placeholder='suche nach Artist...' onChange={(e) => setSearchValue(e.target.value)} />
            </form>

            {/* <div class="container"></div> */}
            {/* <div class="artist__artist"></div> */}
            {/* "url(" + artistImage + ")"  */}
            <div>
                {artist && artist.map(({ artistImage, artworkUrl100, previewUrl, trackCensoredName }) => {
                    return <div style={{ backgroundImage: `url(${artistImage})` }}
                        key={trackCensoredName}
                        onclick={openMedia(previewUrl, trackCensoredName)}
                        className="artist__result">
                    </div>
                })
                }

            </div>

            <div className="media hidden flex-column" ref={media}>
                <video controls autoplay src={videoURL}></video>
                <p>{musicTitle}</p>
            </div>

            <div class="overlay"></div>
        </div>
    )
}
