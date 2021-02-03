import React from 'react'
import '../Css/index.scss'
import Hamburger from './Nav/Hamburger'
import Home from './Home/Home'
import About from './About/About'
import Work from './Work/Work'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <div className={'noPadding noMargin'}>
        <section className={'home'} title={'home'}>
          <Home />
        </section>
        <section className={'about'} title={'about'}>
          <About />
        </section>
        <section className={'work'} title={'work'}>
          <Work />
        </section>
        <section className={'projects'} title={'projects'}>
          <Projects />
        </section>
        <section className={'contact'} title={'contact'}>
          <Contact />
        </section>
        <section className={'footer'} >
          <Footer />
        </section>
        <Hamburger />
      </div>
    </>
  )
}

export default App
