import React from 'react'
import '../Css/index.scss'
import Hamburger from './Nav/Hamburger'
import Home from './Home/Home'
import About from './About/About'
import Work from './Work/Work'

function App() {
  return (
    <>
      <div className={'noPadding noMargin'}>
        <section className={'maxSize centerComponent'}>
          <Home />
        </section>
        <section className={'maxSize centerComponent'}>
          <About />
        </section>
        <section className={'maxSize centerComponent'}>
          <Work />
        </section>
          <Hamburger />
      </div>
    </>
  )
}

export default App
