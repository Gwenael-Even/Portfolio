import React from 'react'
import '../Css/index.scss'
import Hamburger from './Nav/Hamburger'
import Home from './Home/Home'
import About from './About/About'

function App() {
  return (
    <>
      <div className={'noPadding noMargin'}>
        <div className={'maxSize centerComponent'}>
          <Home />
        </div>
        <div className={'maxSize centerComponent'}>
          <About />
        </div>
        <Hamburger />
      </div>
    </>
  )
}

export default App
