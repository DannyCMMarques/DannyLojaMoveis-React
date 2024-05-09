import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Painel.module.css";
const Painel = () => {
  return (
    <div className={styles.painel}>
      <Container fluid>
        <Row>
          <Col md={7} sm={5}>
            <div className={styles.containerInformacao}>
              <div>
                <p className={styles.slogan}>
                  Transforme sua casa em um lar com conforto
                </p>
              </div>
              <div>
                <p className={styles.slogan2}>
                  Descubra a sua morada dos sonhos conosco
                </p>
              </div>

              <Button className={styles.orangeButton}> COMPRE AGORA </Button>
            </div>
          </Col>
          <Col md="5"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Painel;
