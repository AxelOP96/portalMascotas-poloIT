"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import HeaderCurve from "./HeaderCurve";
import { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

export default function Navbar() {
    const [showRegister, setShowRegister] = useState(false);
    const [user, setUser] = useState<{ nombre: string; role: string } | null>(null);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        fetch("http://localhost:5000/api/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then(setUser)
            .catch(() => setUser(null));
        }, []);

        const handleLogout = () => {
            localStorage.removeItem("token");
            setUser(null);
            window.location.href = "/"; 
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
                    {user?.role === "postulante" && (
                    <Link href="/postulante" className={styles.navLink}>
                        Panel de Postulante
                    </Link>
                    )}
                    <Link href="/donaciones" className={styles.navLink}>
                        Donaciones
                    </Link>
                    {user ? (
                        <div className={styles.navLink}>
                            {user.nombre} ({user.role}) |{" "}
                            <button onClick={handleLogout} className="underline text-red-600">
                            Cerrar sesión
                            </button>
                        </div>
                        ) : (
                        <button
                            className={styles.navLink}
                            onClick={() => setShowRegister(true)}
                        >
                            Registrarse
                        </button>
                        )}
                </nav>

                <div className={styles.waveWrapper}>
                    <HeaderCurve />
                </div>
            </header>
            {showRegister && (
                <RegisterModal
                    onClose={() => setShowRegister(false)}
                    onShowLogin={() => setShowLogin(true)}
                />
                )}
                {showLogin && (
                <LoginModal
                    onClose={() => setShowLogin(false)}
                />
                )}
        </>
    );
}
