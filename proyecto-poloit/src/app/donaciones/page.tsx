import Head from "next/head";
import styles from "../styles/Donaciones.module.css";
import Image from "next/image";
import HeaderCurve from "../components/HeaderCurve";

export default function Donaciones() {
    return (
        <>
            <Head>
                <title>Donaciones | MiHogar</title>
            </Head>
            <div className={styles.container}>
                {/* Huellas decorativas */}
                <div className={styles.huellasLeft}>
                    <Image src="/huellas-left.png" alt="Huellas izquierda" width={120} height={120} />
                </div>
                <div className={styles.huellasRight}>
                    <Image src="/huellas-right.png" alt="Huellas derecha" width={120} height={120} />
                </div>
                <div className={styles.banner}>
                    <Image
                        src="/animalitos.png"
                        alt="Animalitos"
                        width={800}
                        height={250}
                        className={styles.bannerImage}
                    />
                </div>

                <div className={styles.texto}>
                    <p>
                        "Cada peludito merece una segunda oportunidad. Con tu ayuda,
                        podemos darle un lugar de tránsito lleno de amor, cuidado y esperanza
                        a quienes más lo necesitan, mientras encuentran un hogar. No es solo
                        una donación, es un acto de vida que transforma historias y crea lazos
                        eternos.
                    </p>
                    <p>
                        Únete a nosotros y sé el cambio que esos ojos esperan. Porque juntos,
                        podemos hacer que cada latido cuente."
                    </p>
                </div>

                <div className={styles.mediosPago}>
                    <Image
                        src="/pagos.png"
                        alt="Medios de Pago"
                        width={800}
                        height={100}
                        className={styles.pagosImage}
                    />
                </div>
            </div>
        </>
    );
}
