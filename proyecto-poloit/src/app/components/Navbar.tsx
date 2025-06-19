import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HeaderCurve from "./HeaderCurve";
import { useState } from "react";
import RegisterModal from "./RegisterModal";
//import PeluditosPage from "../peluditos/page";

export default function Navbar() {
    const [showRegister, setShowRegister] = useState(false);
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
                    <button
                        className={styles.navLink}
                        onClick={() => setShowRegister(true)}
                        >
                        Registrarse
                        </button>
                    <Link href="#donaciones" className={styles.navLink}>
                        Donaciones
                    </Link>
                </nav>

                {/* Curva de olas */}
                <div className={styles.waveWrapper}>
                    <HeaderCurve />
                </div>
            </header>
            {showRegister && <RegisterModal />}
        </>
    );
}
