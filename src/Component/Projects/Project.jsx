import React from 'react'
import { useParams } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs'

function Project (props) {
    let { projectId } = useParams();
    let project = props.projects.filter(projet => projet.id === projectId)

    function content () {
        return (
            <>
            <div className={`projectShow ${props.active ? 'projectOpened' : 'projectClosed' }`}>

                <div className="projectContainer">
                    <div className={'contentProjectTitle'}>
                        <div className="titleProject">
                            <h3>{project[0].title}</h3>
                            <span>{project[0].tech}</span>
                        </div>
                        <div className="arrowClose">
                            <a href='#projet' onClick={props.changeActive}><BsArrowLeft/></a>
                        </div>
                    </div>
                    <div className="projectDescription">
                        <p>{project[0].description}</p>
                    </div>
                    {project[0].github !== '' ? <a href={project[0].github} className={'btn btnGithub'}>Github</a> : '' }
                </div>
            </div>
            <div className={`slider ${props.active ? 'sliderShow' : 'sliderClosed' }`}></div>
            </>
        )
    }

   return project && content()
 
}
export default Project