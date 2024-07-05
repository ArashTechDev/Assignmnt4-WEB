// components/MainNav.js
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MainNav = () => {
  const router = useRouter();
  const [searchField, setSearchField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/artwork?title=true&q=${searchField}`);
  };

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-primary">
        <Container>
          <Navbar.Brand>Arashdeep Singh</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
              <Nav.Link>Advanced Search</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              name="search"
            />
            <Button type="submit" variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
};

export default MainNav;
