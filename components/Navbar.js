import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
import logo from '../public/logo-on-white.jpg';

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contacts', path: '/contacts'},
]

const Navbar = () => {
    const {pathname} = useRouter();
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image 
                    src={logo}
                    width={150}
                    height={60}
                    alt='preview'
                    placeholder='blur'
                />
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => {
                    return (
                        <Link key={id} href={path}>
                            <a className={pathname === path ? styles.active : null}>{title}</a>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar;