import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TelephoneFill } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Whatsapp } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <div className={`mt-3 mb-3 ${styles.divs}`}>
              <h3 className={styles.titulo}>Endereço</h3>
              <p className={styles.subtitulo}>
                Rua Stanley Park, n°100 Centro,Vancouver-BC,Canadá
              </p>
            </div>
            <div className={`mt-3 mb-3 ${styles.divs}`}>
              <h3 className={styles.titulo}>Horário de Funcionamento</h3>
              <p className={styles.subtitulo}>Segunda à Sexta de 8h às 18h</p>
            </div>
            <div className={`mt-3 mb-3 ${styles.divs}`}>
              <h3 className={styles.titulo}>Contato</h3>
              <p className={styles.subtitulo}>
                (22) 99999-9999 dannysmoveis@gmail.com
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.icones}>
              <div className={styles.icones}>
                <Facebook />
              </div>
              <div className={styles.icones}>
                <Instagram />
              </div>
              <div className={styles.icones}>
                <Whatsapp />
              </div>
              <div className={styles.icones}>
                <TelephoneFill />
              </div>
            </div>
            <div className={`d-flex justify-content-end ${styles.direitos}`}>
              <p> Todos os direitos reservados ®Danny's Marques</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
