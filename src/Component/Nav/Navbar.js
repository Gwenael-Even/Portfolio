import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap'

function Navbar (props) {

    useEffect(() => {
        if(props.active) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'

        }
    })

    return (
            <div className={`navBarMenu ${props.active ? 'navBarActive' : ''}`}>
                <nav className={'navBarLink'}>
                    <ul>
                        <li className={'liNavbar'}><a href='#'>Accueil</a></li>
                        <li className={'liNavbar'}><a href='#'>A propos</a></li>
                        <li className={'liNavbar'}><a href='#'>Mon parcours</a></li>
                        <li className={'liNavbar'}><a href='#'>Mes projets</a></li>
                        <li className={'liNavbar'}><a href='#'>Me contacter</a></li>
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar