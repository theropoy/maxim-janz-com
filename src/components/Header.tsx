import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import "../styles/Header.css"

const Header = () => {

    const navigate = useNavigate();

    const ref = useRef<HTMLDivElement | null>(null);

    const [element, setElement] = useState<Element | null>(null);
    const [isVisible, setisVisible] = useState(true);
    const observer = useRef<null | IntersectionObserver>(null);

    const observerCall = (entry: any) => {
        const [entries] = entry
        setisVisible(entries.isIntersecting);   
    }

    useEffect(() => {
        setElement(ref.current);
    },[ref])

    useEffect(() => {
        if(!element) return;

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.
        }

        const ob = observer.current = new IntersectionObserver(
            observerCall,
            options
        )

        if (ref.current) ob.observe(element)
        
        return () => {if (observer.current) observer.current.disconnect()}
    }, [element])


    const notVisibleHeader = () => {
        return (
            <div className="notVisible-header">
                <div className="notVisible-logo">
                    <h1 onClick={logoClick} >MJ</h1>
                </div>
                
            </div>
        )
    }

    const logoClick = () => {
        navigate("/");
    }


    return (
        <header>
            <div ref={ref} className="visible-header">
                <div className="logo">
                    <h1 onClick={logoClick}>Maxim Janz</h1>
                </div>
            </div>
            
            {
                isVisible ? <></> : notVisibleHeader()
            }
            
        </header>
    )
}

export default Header
