import React, { useEffect } from 'react';

function Navbar (props) {

    const links = [
        {
            href : '#home',
            text: 'Accueil',
        },
        {
            href : '#about',
            text: 'A propos',
        },
        {
            href : '#work',
            text: 'Mon parcours',
        },
        {
            href: '#project',
            text: 'Mes projets',
        },
        {
            href: '#contact',
            text: 'Me contacter',
        }
    ]

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
                    {
                        links.map((link) => {
                            return <li key={link.href} className={'liNavbar'}><a href={link.href} onClick={props.changeActive}>{link.text}</a></li>
                        })
                    }
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar