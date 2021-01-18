import React  from 'react'
import { FaArrowRight } from 'react-icons/fa'
 
function Landpage () {

    return (
        <>
            <div className={'landingPage'}>
                <p>Bonjour, je suis</p>
                <p><span>Gwenaël Even</span>.</p>
                <p>Je suis</p>
                <p><span>Développeur web</span>.</p>
                <p>Bienvenue !</p>
                <button>Découvrez moi<FaArrowRight/></button>
            </div>
        </>
    )
}

export default Landpage