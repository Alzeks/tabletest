import Link from 'next/link';
import styles from './navbar.module.css'

export default function Navbar() {
    return (
    <div className={styles.container}>
        <Link href='/'><h2>Tabletask</h2></Link>
        <div className={styles.link}>
        <Link href='/'><h4>Accounts</h4></Link>  
        <Link href='/profiles'><h4>Profiles</h4></Link>
        <Link href='/compaigns'><h4>Compaign</h4></Link>
        </div>
        </div>
    );
}