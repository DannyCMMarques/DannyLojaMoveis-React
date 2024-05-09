import styles from "./cardItem.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomButton from "../buttons/Buttons";

const CardItem = ({
  id,
  categoria,
  nome,
  descricao,
  preco,
  textButton,
  imagem,
}) => {
  return (
    <>
      <Card
        key={id}
        className={`me-4 mt-3 mb-2 ${styles.medidas}`}
        style={{
          width: "356px",
          //height: "509px",
          // backgroundColor:
          //   categoria === "sofa"
          //     ? "#FFEFD5"
          //     : categoria === "mesa"
          //     ? "#8abdd8"
          //     : categoria === "armario"
          //     ? "#E6E6FA"
          //     : "#DDA0DD",
        }}
      >
        <Card.Img variant="top" className={`${styles.imagem} `} src={imagem} />
        <Card.Body>
          <Card.Title className={styles.title}>{nome}</Card.Title>
          <small>Descrição: </small>
          <Card.Text className={styles.descricao}>{descricao}</Card.Text>
          <Card.Text className={styles.price}>{preco}</Card.Text>
          <CustomButton size="big" categoria="orange" textButton={textButton} />
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
