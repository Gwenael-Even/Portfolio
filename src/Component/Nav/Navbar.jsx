import React, { useEffect } from 'react';
import { Link } from 'react-scroll';


function Navbar (props) {

    const links = [
        {
            id:1,
            href : 'home',
            text: 'Accueil',
        },
        {
            id:2,
            href : 'about',
            text: 'A propos',
        },
        {
            id:3,
            href : 'work',
            text: 'Mon parcours',
        },
        {
            id:4,
            href: 'projects',
            text: 'Mes projets',
        },
        {
            id:5,
            href: 'contact',
            text: 'Me contacter',
        }
    ]

    useEffect(() => {
        if(props.active && window.innerWidth < '768' && window.innerHeight < '768') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    })

    return (
            <div className={`navBarMenu ${props.active ? 'navBarActive' : 'navBarClosed'}`}>
                <nav className={'navBarLink'}>
                    <ul>
                    {
                        links.map((link) => {
                            return (
                                <li key={link.id} className={'liNavbar'}>
                                    <Link to={link.href} setactiveclass={'active'} spy={true} onClick={props.changeActive}>
                                        {link.text}
                                    </Link>
                                </li>
                            ) 
                        })
                    }
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar