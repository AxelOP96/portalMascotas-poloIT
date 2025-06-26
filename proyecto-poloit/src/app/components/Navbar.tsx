"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HeaderCurve from "./HeaderCurve";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

export default function Navbar() {
    const [showRegister, setShowRegister] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <Image
                        src="/mihogar-logo-mini.png"
                        alt="MiHogar Logo"
                        width={200}
                        height={40}
                        className={styles.logo}
                    />
                </Link>

                <button className={styles.burger} onClick={toggleMenu}>
                    ☰
                </button>

                <nav
                    className={`${styles.nav} ${menuAbierto ? styles.showMenu : ""}`}
                >
                    <Link href="/ver-peluditos" className={styles.navLink}>
                        Ver Peluditos
                    </Link>
                    <Link href="/donaciones" className={styles.navLink}>
                        Donaciones
                    </Link>
                </nav>

                <div className={styles.waveWrapper}>
                    <HeaderCurve />
                </div>
            </header>

            {showRegister && <RegisterModal />}
        </>
    );
}
