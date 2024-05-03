import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import HelperNav from "./HelperNav.ts";
import { useState, useEffect } from "react";

const Navegacao = () => {
  const location = useLocation();
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setCategoriaAtiva(1);
    } else {
      const rotaAtual = HelperNav.find(
        (item) => item.href === location.pathname
      );
      if (rotaAtual) {
        setCategoriaAtiva(rotaAtual.id);
      }
    }
  }, [location.pathname]);

  const handleSelect = () => {
    setExpanded(false); // Fechar o menu responsivo ao selecionar um item
  };

  return (
    
    <Navbar
      collapseOnSelect
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      className={styles.menu}
     
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.d}>
          D<span className={`${styles.brandW}`}>anny's Movéis</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto ml-auto " style={{marginLeft:"auto"}}>
            {HelperNav.map((HelperNavItem) => (
              <Nav.Link
                key={HelperNavItem.id}
                as={Link}
                to={HelperNavItem.href}
                className={`${styles.li} ${
                  categoriaAtiva === HelperNavItem.id ? styles.ativos : ""
                }`}
                onClick={handleSelect}
              >
                {HelperNavItem.nome}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacao;
