import React from 'react'
import { AiFillGithub} from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'


function Footer () {

    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    const linkedinUrl = 'https://www.linkedin.com/in/gwenael-even/'
    const githubUrl = 'https://github.com/Gwenael-Even'

    return (
        <>
        <div className={'diagonal'} />
        <div className={'footerContainer'}>
            <div className={'socialMediaContainer'}>
                <div className={'socialMediaSquare'}>
                    <a href={linkedinUrl}><RiLinkedinFill className={'icon'} /></a>
                </div>
                <div className={'socialMediaSquare'}>
                    <a href={githubUrl}><AiFillGithub className={'icon'} /></a>
                </div>
            </div>
            <span>Gwenaël Even - {getCurrentYear()} </span>
        </div>
        </>
    )
}

export default Footer