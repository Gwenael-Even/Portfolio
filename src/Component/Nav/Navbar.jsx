import React, { useEffect } from 'react';

function Navbar (props) {

    const links = [
        {
            id:1,
            href : '#home',
            text: 'Accueil',
        },
        {
            id:2,
            href : '#about',
            text: 'A propos',
        },
        {
            id:3,
            href : '#work',
            text: 'Mon parcours',
        },
        {
            id:4,
            href: '#project',
            text: 'Mes projets',
        },
        {
            id:5,
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
                            return <li key={link.id} className={'liNavbar'}><a href={link.href} onClick={props.changeActive}>{link.text}</a></li>
                        })
                    }
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar