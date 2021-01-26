import React, { useState } from 'react'

function Work () {

    const timelineSchool = [
        {
            id:1,
            date: '2019 - 2020',
            title: 'Licence professionnelle DIWA, IUT Laval',
            description: 'Licence Professionnelle DIWA (Développeur et Intégrateur de Web Applications) - mention assez bien'
        },
        {
            id:2,
            date: '2016 - 2018',
            title: 'BTS SIO,  Lycée VHB, Rennes',
            description: 'BTS SIO SLAM (Solution Logicielles et Applications Métier), mention bien'
        },
        {
            id:3,
            date: '2015 - 2016',
            title: 'BTS SIO,  Lycée VHB, Rennes',
            description: 'Baccalauréat SIG (Système d’information de Gestion, mention bien'
        }
    ]

    const timelineWork = [
        {
            id:4,
            date: 'Aujourd’hui - le futur',
            title: 'Chez vous',
            description: 'Dans votre entreprise ?'
        },
        {
            id:5,
            date: 'Nov 2020 - Déc 2020',
            title: 'Interdigital, Rennes',
            description: "Contrat d’intérim - Acquisition de données dans le but de créer une bibliothèque d'objet 3D pour permettre le fonctionnement d'un algorithme de Machine Learning."
        },
        {
            id:6,
            date: 'Oct 2019 - Sep 2020',
            title: 'Enerfox, Laval',
            description: "Contrat d’alternance - Développement et amélioration de l’application Visual’Fox, permettant aux utilisateurs de suivre et d’optomiser leur consommation et autoconsommation d’énergie verte"
        },
        {
            id:7,
            date: 'Oct 2017 - Fev 2018',
            title: 'Ökmont, Pacé',
            description: "CDD - Développement d'une application Web complète permettant la gestion commerciaux/ventes/prospection, d'accéder à des statistiques et à des chiffres clef de l'entreprise rapidement et efficacement."
        }
    ]

    const [selected, setSelected] = useState(true)

    let isSelected = selected ? timelineSchool : timelineWork

    return (
        <>
            <h1>Mon parcours</h1>
            <div className={'timelineButtons'}>
                <button onClick={()=> setSelected(true)} className={selected ?'btnLink' : 'btnLink btnUnselect'}>Etudes</button>
                <button onClick={()=> setSelected(false)} className={!selected ?'btnLink' : 'btnLink btnUnselect'}>Parcours pro</button>
            </div>
            <ul className={'timeline'}>
                {
                    isSelected.map((timeline) => {
                        return (
                        <li key={timeline.id}>
                            <div className={'circleTimeline'} />
                            <div className={'timelineText'}>
                                <h2 className={'timelineDate'}>{timeline.date}</h2>
                                <h3 className={'timelineTitle'}>{timeline.title}</h3>
                                <p className={'timelineDescription'}>{timeline.description}</p>
                            </div>
                        </li>
                        )   
                    })
                }
            </ul>
            <a href='#about' className={'btn btn-small'}>Télécharger mon CV</a>
        </>
    )
}

export default Work