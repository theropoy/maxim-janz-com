import React from 'react'
import "../../styles/impressum/Impressum.css"
import Header from '../Header'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

interface impressumProps {
    setFooterSticky: (x: boolean) => void
  }

const Impressum: React.FC<impressumProps> = ({setFooterSticky}) => {
    useEffect(() => {
        setFooterSticky(true)
    }, [])

    return (
        <div className="impressum">
            <Helmet>
            <title>{"Webentwickler | Maxim Janz"}</title>
            <meta name='description' content={"Impressum"} />
            <meta name="robots" content="noindex" />
            <html lang = "de"></html>
            </Helmet>
            <Header />
            <div className="impressum-container">
                <div className="impressum-content">
                <h2>Impressum</h2>

                <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
                <p>Maxim Janz<br />
                    Schlo&szlig;stra&szlig;e, 31<br />
                    76726 Germersheim</p>

                <h3>Kontakt</h3>
                <p>Telefon: 01525 6917442<br />
                E-Mail: info@maxim-janz.com</p>

                <h3>EU-Streitschlichtung</h3>
                <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                <h3>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h3>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default Impressum
