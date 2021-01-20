import React  from 'react'
import { FaArrowRight } from 'react-icons/fa'
 
function Home () {

    return (
        <>
            <div className={'home'} id='home'>
                <p>Bonjour, je suis</p>
                <p><span>Gwenaël Even</span>.</p>
                <p>Je suis</p>
                <p><span>Développeur web</span>.</p>
                <p>Bienvenue !</p>
                <button><a href='#about'>Découvrez moi<FaArrowRight/></a></button>
            </div>
        </>
    )
}

export default Home