import React, { useEffect, useRef } from 'react'
import "../styles/Footer.css"
import {useNavigate} from 'react-router-dom'

interface footerProps {
    isSticky: boolean
}

const Footer: React.FC<footerProps> = ({isSticky}) => {

    const navigate = useNavigate();

    const clickHandler = (to: string) => {
        navigate("/" + to);
    }

    const style = {
        position: "sticky",
        bottom: "0"
    } as React.CSSProperties;

    const style2 = {
        position: "relative",
        bottom: "0",
        right: "0",
        left: "0"
    } as React.CSSProperties;

    return (
        <footer className="foot"
            style={isSticky? style : style2}
        >
            <ul>
                <li onClick={() => clickHandler("datenschutz")}>Datenschutz</li>
                <li onClick={() => clickHandler("impressum")}>Impressum</li>
            </ul>
        </footer>
    )
}

export default Footer
