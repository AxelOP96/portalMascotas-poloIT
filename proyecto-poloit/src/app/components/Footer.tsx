"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Izquierda: Logo y redes */}
        <div className={styles.redes}>
          <Image src="/mihogar-logo-mini.png" alt="MiHogar Logo" width={100} height={40} />
          <Image src="/wpp.svg" alt="WhatsApp" width={30} height={30} />
          <Image src="/ig.svg" alt="Instagram" width={30} height={30} />
          <Image src="/fbk.svg" alt="Facebook" width={15} height={15} />
        </div>

        {/* Centro: navegación */}
        <div className={styles.navLinks}>
          <Link href="#inicio" className={styles.navLink}>Inicio</Link>
          <Link href="#peluditos" className={styles.navLink}>Ver Peluditos</Link>
          <Link href="#donaciones" className={styles.navLink}>Donar</Link>
        </div>

        {/* Derecha: contacto */}
        <div className={styles.contacto}>
          <p>Av. Santa fe 6202 5D</p>
          <p>Buenos Aires</p>
          <p>+59 11 25897046</p>
          <p>informihogar@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
