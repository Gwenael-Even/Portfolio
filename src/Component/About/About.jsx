import React from 'react'

function About () {

    const linkedin = 'https://www.linkedin.com/in/gwenael-even/'

    return (
        <>
        <div className={'about'} id='about'>
            <h1>Qui-suis-je ?</h1>
            <div className={'picShadow'}>
                <div className={'pic'} />
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
            </div>
        </div>
        </>
    )
}

export default About