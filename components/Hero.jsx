import Image from 'next/image'
import imgHero from '@/img/hero.png'

export default function Hero() {
    return (
        <div>
            <h1>Discover digital Art and collect <span className='gradient-text'> Musik </span> Platform</h1>
            <p>Entdecke Musikneuheiten sowie im Trend liegende Alben und erstelle deine eigene Musiksammlung.</p>
            <button className='btn-main'>entdecke</button>
            <button className='btn-outline'>erstelle playlist</button>
            <Image
                alt="Hero"
                src={imgHero}
                width="450"
                height="468"
                placeholder="blur"
            />
        </div>
    )
}
