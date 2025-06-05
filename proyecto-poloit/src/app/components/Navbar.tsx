import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HeaderCurve from "./HeaderCurve";
//import PeluditosPage from "../peluditos/page";

export default function Navbar() {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <Image
                        src="/mihogar-logo-mini.png"
                        alt="MiHogar Logo"
                        width={320}
                        height={40}
                        className={styles.logo}
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/peluditos" className={styles.navLink}>
                        Ver Peluditos
                    </Link>
                    <Link href="#donaciones" className={styles.navLink}>
                        Donaciones
                    </Link>
                </nav>

                {/* Curva de olas */}
                <div className={styles.waveWrapper}>
                    <HeaderCurve />
                </div>
            </header>
        </>
    );
}
