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
        <section className={'home'} id={'home'}>
          <Home />
        </section>
        <section className={'about'} id={'about'}>
          <About />
        </section>
        <section className={'work'} id={'work'}>
          <Work />
        </section>
        <section className={'projects'} id={'projects'}>
          <Projects />
        </section>
        <section className={'contact'} id={'contact'}>
          <Contact />
        </section>
        <section className={'footer'} id={'footer'}>
          <Footer />
        </section>
        <Hamburger />
      </div>
    </>
  )
}

export default App
