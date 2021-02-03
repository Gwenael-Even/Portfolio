import React  from 'react'
import crepArt from '../../Assets/images/CrepArt.png'
import crepArt2 from '../../Assets/images/CrepArt2.png'
import Okmont from '../../Assets/images/Okmont.png'
import Okmont2 from '../../Assets/images/Okmont2.png'

function Projects () {

    const projects = [
        {
            id:1,
            img: window.innerWidth < '768' ? crepArt : crepArt2,
            alt: "Image du projet Crep'Art",
            title: "Crep'Arts",
            tech: 'PHP'
        },
        {
            id:2,
            img: window.innerWidth < '768' ? Okmont : Okmont2,
            alt: "Image du projet Ökmont",
            title: "OkmonTeam",
            tech: 'PHP'
        },
        {
            id:3,
            img: window.innerWidth < '768' ? Okmont : Okmont2,
            alt: '',
            title: 'Okmonteam2',
            tech: 'php'
        },
        {
            id:3,
            img: window.innerWidth < '768' ? Okmont : Okmont2,
            alt: '',
            title: 'Okmonteam2',
            tech: 'php'
        },
        {
            id:3,
            img: window.innerWidth < '768' ? Okmont : Okmont2,
            alt: '',
            title: 'Okmonteam2',
            tech: 'php'
        },

        
    ]

    return (
        <>
            <h1>Mes projets</h1>
            <div className={'projectsContainer'}>
                {
                    projects.map((project) => {
                        return (
                        <div className={'project'} key={project.id}>
                            <div className={'projectOverlay'}>
                                <div className={'projectTitle'}>
                                    <h3>{project.title}</h3>
                                    <span>{project.tech}</span>
                                </div>
                            <button href='#' className={'btn btnProject'}>Voir plus</button>
                            </div>
                            <img src={project.img}
                            alt={project.alt}>
                            </img>
                        </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Projects
