import React from 'react';
import { Col } from 'react-bootstrap'

function Navbar (props) {

    return (
            <div className={`navBarMenu ${props.active ? 'navBarActive' : ''}`}>
                <div className={'navBarLink'}>
                    <ul>
                        <li className={'liNavbar'}><a href='#'>Accueil</a></li>
                        <li className={'liNavbar'}><a href='#'>A propos</a></li>
                        <li className={'liNavbar'}><a href='#'>Mon parcours</a></li>
                        <li className={'liNavbar'}><a href='#'>Mes projets</a></li>
                        <li className={'liNavbar'}><a href='#'>Me contacter</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar