import React, {useRef, useLayoutEffect, useState} from 'react'

function About () {

    const linkedin = 'https://www.linkedin.com/in/gwenael-even/'

    const ourRef = useRef(null)
    const [show, doShow] = useState({itemOne: false, itemTwo: false, itemThree: false}) // ...etc

    useLayoutEffect(() => {
        const bottomPosition =  ourRef.current.getBoundingClientRect().top

        // A compléter voir a uniformiser pour être réutilisable partout
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight

            if (bottomPosition < scrollPosition) {
                doShow(state => ({ ...state, itemOne: true}))
            }
        }
    
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
    <>
        <h1>Qui-suis-je ?</h1>
        <div className="aboutContainer">
                <div className={`picContainer${show.itemOne ? ' fadeIn' : ''}`} animate={show.itemOne.toString()} ref={ourRef}>
                    <div className={'picShadow'}>
                        <div className={'pic'}  />
                    </div>
                </div>
            <div className={'textAbout'}>
                    <p>Je suis Gwenaël, jeune développeur de 23 ans vivant à Rennes.</p>
                    <p>Passionné par le web depuis mes 10 ans, 
                        j’aime <span>apprendre</span>, <span>créer</span>, <span>développer</span>, <span>découvrir</span> et 
                        construire chaque jour le web de demain
                    </p>
                    <p className='aboutContact'>
                        Envie de travailler avec moi ?
                        Contactez moi par <a href='#contact' className={'yellow'}>mail</a> ou sur <a href={linkedin} className={'yellow'}>LinkedIn</a>
                    </p>
                    <a href='#about' className={'btn btn-small'}>Télécharger mon CV</a>
            </div>
        </div>
    </>
    )
}

export default About