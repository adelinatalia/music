import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className='site-navigation flex-row-center'>
            <Link href="/">
                <img src="./icons/logo.png" alt="logo" width="32" />
            </Link>
            <Link href="/">home</Link>
            <Link href="/">artists</Link>
            <Link href="/">albums</Link>
            <Link href="/">tracks</Link>
            {/* <Link href="/">playlist</Link> */}
            <Link href="/">lyrics</Link>

            <form className='site-navigation__form '>
                <label htmlFor="search" className='flex-row-center'>
                    <input type="text" id='search' placeholder='suche nach ...' />
                    <Link href="/" className='flex-row-center'>
                        <img src="./icons/icon-search.png" alt="search icon" width="30" />
                    </Link>
                </label>
            </form>

            <div className="site-navigation__btns">
                <Link href="/" className='site-navigation__btn'>
                    <img src="./icons/icon-fav.png" alt="favorites icon" width="30" />
                </Link>
                <Link href="/" className='site-navigation__btn'>
                    <img src="./icons/icon-user.png" alt="user auth icon" width="32" />
                </Link>
            </div>
        </nav>
    )
}
