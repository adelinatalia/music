import Image from 'next/image'
import imgHero from '@/img/hero.png'

export default function Hero() {
    return (
        <div className='hero flex-row'>
            <div className='flex-column'>
                <div className="hero__heading flex-column">
                    <h1>Discover digital Art and collect <span className='gradient-text'> Musik </span> Platform</h1>
                    <p className='hero__text'>Entdecke Musikneuheiten sowie im Trend liegende Alben und erstelle deine eigene Playlist</p>
                </div>
                <div className="hero__buttons flex-row">
                    <button className='btn-primary hero__btn'>entdecke</button>
                    <button className='btn-outline hero__btn'>erstelle playlist</button>
                </div>
            </div>
            <Image
                alt="Hero"
                src={imgHero}
                width="450"
                height="468"
                placeholder="blur"
                className='hero__image'
            />
        </div>
    )
}
