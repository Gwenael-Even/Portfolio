import React from 'react'
import '../Css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Hamburger from './Nav/Hamburger'

function App() {
  return (
    <>
      <Container fluid='sm' className={'noPadding noMargin'}>
          <Row noGutters>
              <div style={{backgroundColor: '#3b3a36', width:'100vw', height:'100vh', overflow:'hidden'}}/>
              <Hamburger />
          </Row>
      </Container>
    </>
  )
}

export default App
