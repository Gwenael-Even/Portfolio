import React  from 'react'
import crepArt from '../../Assets/images/CrepArt.png'
import Okmont from '../../Assets/images/Okmont.png'

function Projects () {

    const projects = [
        {
            id:1,
            img: crepArt,
            alt: "Image du projet Crep'Art",
            title: "Crep'Arts",
            tech: 'PHP'
        },
        {
            id:2,
            img: Okmont,
            alt: "Image du projet Ökmont",
            title: "OkmonTeam",
            tech: 'PHP'
        }
    ]

    return (
        <>
            <div className={'projects'} id='projects'>
                <h1>Mes projets</h1>
                <div className={'projectsContainer'}>
                    {
                        projects.map((project) => {
                            return (
                            <div className={'project'}>
                                 <div className={'projectOverlay'}>
                                    <div className={'projectTitle'}>
                                        <h3>{project.title}</h3>
                                        <span>{project.tech}</span>
                                    </div>
                                <button href='#' className={'btn btnProject'}>Voir plus</button>
                                </div>
                                <img src={project.img} alt={project.alt} />
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Projects
