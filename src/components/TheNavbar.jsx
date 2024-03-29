import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TheNavbar = () => {
  return(
<Navbar bg="light" variant="light">
<Container>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/employeeslist">Employees List</Nav.Link>
  </Nav>
  <Nav.Link href="/login"><Button variant="primary" type='button'>Login</Button></Nav.Link>
</Container>
</Navbar>
  )
}

export default TheNavbar;
