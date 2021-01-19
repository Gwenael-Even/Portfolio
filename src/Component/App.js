import React from 'react'
import '../Css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import Hamburger from './Nav/Hamburger'
import Landpage from './Landpage/Landpage'
import About from './About/About'


function App() {
  return (
    <>
      <Container fluid='sm' className={'noPadding noMargin'}>
        <div className={'maxSize centerComponent'}>
          <Landpage />
        </div>
        <div className={'maxSize centerComponent'}>
          <About />
        </div>
        <Hamburger />
      </Container>
    </>
  )
}

export default App
