import React from 'react';
import '../../Css/navMenu.scss'
import { Col } from 'react-bootstrap'

function Navbar (props) {

    return (
            <div className={`navBarMenu ${props.active ? 'navBarActive' : ''}`}>
                <div className={'navBarLink'}>
                    <ul>
                        <li className={'liNavbar'}><a href='#'>Ici</a></li>
                        <li className={'liNavbar'}><a href='#'>Parcours</a></li>
                        <li className={'liNavbar'}><a href='#'>Projets</a></li>
                        <li className={'liNavbar'}><a href='#'>Me contacter</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar