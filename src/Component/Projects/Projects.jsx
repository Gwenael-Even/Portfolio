import React, {useState}  from 'react'
import crepArt from '../../Assets/images/CrepArt.png'
import crepArt2 from '../../Assets/images/CrepArt2.png'
import Okmont from '../../Assets/images/Okmont.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Project from './Project'

function Projects () {

    const [active, setActive] = useState(false)

    const changeActive = () => {
        setActive(!active)
    }


    const projects = [
        {
            id:'1',
            img: window.innerWidth < '768' ? crepArt : crepArt2 ,
            alt: "Image du projet Crep'Art",
            title: "Crep'Arts",
            tech: 'PHP',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi dolorum repellat aliquid veniam tempore quos aliquam autem ducimus corporis laborum, dolore perspiciatis saepe voluptatum blanditiis corrupti optio nihil possimus error?',
            github:'https://github.com/Gwenael-Even/Projet_CrepArts'
        },
        {
            id:'2',
            img: Okmont,
            alt: "Image du projet Ökmont",
            title: "OkmonTeam",
            tech: 'PHP',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi dolorum repellat aliquid veniam tempore quos aliquam autem ducimus corporis laborum, dolore perspiciatis saepe voluptatum blanditiis corrupti optio nihil possimus error?',
            github:''
        },
    ]

    return (
        <>
            <h1>Mes projets</h1>
            <div className={'projectsContainer'}>
            <Router>
                {
                    projects.map((project) => {
                        return (
                        <div className={`project ${active ? 'isOpened' : '' }`} key={project.id}>
                            <div className={'projectOverlay'}>
                                <div className={'projectTitle'}>
                                    <h3>{project.title}</h3>
                                    <span>{project.tech}</span>
                                </div>
                                <Link to={`/project/${project.id}`} onClick={() => setActive(!active)} className={'btn btnProject'}>Voir plus</Link>
                            </div>
                            <img src={project.img}
                            alt={project.alt}>
                            </img>
                        </div>
                        )
                    })
                }
                <Switch>
                    <Route path="/project/:projectId" children={<Project active={active} projects={projects} changeActive={changeActive}/>}></Route>
                </Switch>
                </Router>
            </div>
        </>
    )
}

export default Projects
