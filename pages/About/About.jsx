import React from 'react';
import styles from './About.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HouseHeartFill, ChatSquareHeartFill, EnvelopeHeartFill } from 'react-bootstrap-icons';
import CardValores from './../../components/CardValores/CardValores';

const About = () => {
  return (
    <div>
      <Container fluid className={styles.containerCentral}>
        <Row>
          <Col xs={12} className="text-center mb-3">
            <h1 className={styles.sobreNos}>Sobre nós</h1>
          </Col>
          <Col md={5} sm={12} className="mb-3">
            <div className={styles.div1}>
              <h1 className={styles.titulo}>Um pouco da nossa história:</h1>
              <p className={styles.subtitulo}>
                Fundada em 1995 na grande São Paulo, nossa empresa nasceu do sonho e do amor por móveis de qualidade e encantadores. Desde então, temos nos dedicado incansavelmente para oferecer aos nossos clientes uma experiência excepcional em mobiliário. Ao longo dos anos, crescemos e nos tornamos uma referência no setor, comprometidos em proporcionar não apenas produtos de excelência, mas também um atendimento personalizado que reflete nosso compromisso com a satisfação do cliente. Com uma equipe apaixonada e talentosa, continuamos a inovar e aprimorar nossos produtos e serviços, mantendo sempre vivo o espírito que nos inspirou desde o início.
              </p>
            </div>
            
          </Col>
          <Col md={7} sm={12} className={`mb-3 ${styles.visibilidade }`}>
            <div className={styles.inicial}>
              <h1>Nossos Valores:</h1>
              <p className={styles.subtitulo2}>Em cada móvel estão presentes:</p>
            </div>
            <Row className="mb-3">
              <Col md={4} sm={12}>
                <CardValores
                  icones={<HouseHeartFill />}
                  titulo={"Qualidade duradoura"}
                  subtitulo={"Nossa promessa para você"}
                />
              </Col>
              <Col md={4} sm={12}>
                <CardValores
                  icones={<ChatSquareHeartFill />}
                  titulo={"Paixão pelo Design"}
                  subtitulo={"Uma característica essencial."}
                />
              </Col>
              <Col md={4} sm={12}>
                <CardValores
                  icones={<EnvelopeHeartFill />}
                  titulo={"Satisfação"}
                  subtitulo={"Priorizamos a sua satisfação."}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="mb-3">
                <div className={styles.imagem}></div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className={styles.imagem2}></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
