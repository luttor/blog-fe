import Link from "next/link"

const Header = () => {
    return (
        <nav>
            <div className="site-title">
                <Link href="/"><h1>Blog Ninja</h1></Link>
                <p>A Net Ninja Site</p>
            </div>

            <ul>
                <li>
                    <Link href="/">Blogs</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog/create">New Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header