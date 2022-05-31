import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.bg}>
            <Link href='/'>Home</Link>
            <Link href='/about'>about</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/posts'>Posts</Link>
        </div>
    )
}

export default Navbar