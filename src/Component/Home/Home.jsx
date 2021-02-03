import React  from 'react'
import { FaArrowRight } from 'react-icons/fa'
import LerpBar from '../Scroll/LerpBar'
import { Link } from 'react-scroll';
 
function Home () {

    return (
        <>
            <LerpBar />
            <div className={'textContainer'}>
                    <div>
                        <p className={'textAnim1'}>&gt; npm start <span>Portfolio_Gwenaël_Even</span></p>
                    </div>
                    <div>
                    <p className={'textAnim2'}> <span>.................</span></p>
                    </div>
                    <div>
                        <p className={'textAnim3'}>&gt; <span>Compiled successfully!</span></p>
                    </div>
                    <div>
                        <p className={'textAnim4'}>&gt; <span>Bienvenue !</span></p>
                    </div>
            </div>
            <Link to={'about'} className={'btn'}>Découvrez moi<FaArrowRight/></Link>
        </>
    )
}

export default Home