import React, { useState } from 'react'
import '../../Css/navMenu.scss'
import NavBar from './Navbar'

function Hamburger () {
    const [active, setActive] = useState(false)

    return (
        <>
            <div className={`hamburgerContainer`} onClick={() => setActive(!active)}>
                <span className={`${active ? 'open' : '' }`} />
                <span className={`${active ? 'open' : '' }`} />
                <span className={`${active ? 'open' : '' }`} />
            </div>
            <NavBar active={active} />
        </>
    )
}

export default Hamburger