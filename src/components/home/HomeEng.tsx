import React, { useEffect, useRef, useState } from 'react'
//import "../../styles/home/Home.css"
import Header from '../Header'
import Hero from './Hero'
import About from './About'

import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'

import styles from "../../styles/Text.module.css"
import { Helmet } from 'react-helmet'

interface homeProps {
    setFooterSticky: (x: boolean) => void
}

const HomeEng: React.FC<homeProps> = ({setFooterSticky}) => {
    useEffect(() => {
        setFooterSticky(false)
    }, [])

    const [backendData, setBackendData] = useState([{}]);

    const aboutRef = useRef<null | HTMLDivElement>(null);
    const skillsRef = useRef<null | HTMLDivElement>(null);
    const portfolioRef = useRef<null | HTMLDivElement>(null);
    const contactRef = useRef<null | HTMLDivElement>(null);

    return (
        <div className="home">
            <Helmet>
                <title>{"Web Developer | Maxim Janz"}</title>
                <meta name='description' content={"Represent your business with a modern website! I will develop or upgrade your dream website."} />
                <meta name='robots' content='index, follow' />
                <link rel="canonical" href={"https://maxim-janz.com/eng"} />
                <meta name="keywords" content="web developer, webdesign, web design, developer, make website, develope website, wordpress"/>
                <html lang = "en"></html>
            </Helmet>
            <div id="header-hero">
                <Header />
                <Hero aboutRef={aboutRef} skillsRef={skillsRef} portfolioRef={portfolioRef} contactRef={contactRef} ger={false}/>
            </div>
            
            <About reff={aboutRef} ger={false}/>
            <Skills reff={skillsRef} ger={false}/>
            <Portfolio reff={portfolioRef} ger={false}/>
            <Contact reff={contactRef} ger={false}/>
                
        </div>
    )
}

export default HomeEng
