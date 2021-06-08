import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {

  render() {
    return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yousef Abu-Jalboush</Navbar.Brand>
        </Container>
      </Navbar>

    );
  }
}
export default Footer;
