import React from 'react'
import '../Css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import Hamburger from './Nav/Hamburger'
import Landpage from './Landpage/Landpage'

function App() {
  return (
    <>
      <Container fluid='sm' className={'noPadding noMargin'}>
              <Landpage />
              <Hamburger />
      </Container>
    </>
  )
}

export default App
