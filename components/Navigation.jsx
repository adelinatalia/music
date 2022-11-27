import Link from 'next/link'
// https://nextjs.org/docs/api-reference/next/link

export default function Navigation() {
    return (
        <nav className='site-navigation'>
            <Link href="/">home</Link>
            {/* <Link href="/artists">artists</Link> */}
        </nav>
    )
}
