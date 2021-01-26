import React  from 'react'
import { FaArrowRight } from 'react-icons/fa'
 
function Home () {

    return (
        <>
            <p>Bonjour, je suis</p>
            <p><span>Gwenaël Even</span>.</p>
            <p>Je suis</p>
            <p><span>Développeur web</span>.</p>
            <p>Bienvenue !</p>
            <a href='#about' className={'btn'}>Découvrez moi<FaArrowRight/></a>
        </>
    )
}

export default Home