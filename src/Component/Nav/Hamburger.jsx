import React, { useState } from 'react'
import NavBar from './Navbar'

function Hamburger () {
    const [active, setActive] = useState(false)

    const changeActive = () => {
        setActive(!active)
    }

    return (
        <>
            <div className={`hamburgerContainer`} onClick={() => setActive(!active)}>
                <span className={`${active ? 'open' : '' }`} />
                <span className={`${active ? 'open' : '' }`} />
                <span className={`${active ? 'open' : '' }`} />
            </div>
            <NavBar active={active} changeActive={changeActive} />
        </>
    )
}

export default Hamburger