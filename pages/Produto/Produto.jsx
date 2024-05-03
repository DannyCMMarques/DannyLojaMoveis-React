import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardItem from "../../components/card-item/cardItem.jsx";
import { produtim } from "./../../data/db.json";
import { useEffect, useState } from "react";
import styles from "./Produto.module.css";
import helper from "./helper.ts";
const Produto = () => {
  const products = produtim;

  const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);

  
  const filteredProducts = (categoria) => {
    const filter =
      categoria !== "todos"
        ? products.filter(
            (product) =>
              product.categoria === categoria ||
              (product.destaque && categoria === "populares")
          )
        : products;
    setCategoriaSelecionada(filter);
    return categoriaSelecionada;
  };

  // usei para iniciar o filteredProducts para Todos
  useEffect(() => {
    filteredProducts("todos");
    setCategoriaAtiva("todos");
  }, []);

  const handleCategoriaClick = (categoria) => {
    filteredProducts(categoria);
    setCategoriaAtiva(categoria);
  };

  return (
    <>
      {/* FILTROS */}
      <div className={styles.containerProducts}>
        <Container className="pb-3">
          <Row>
            <Col className={styles.filter}>
              <div className={styles.produtos}>
                <span>PRODUTOS</span>
              </div>
              <div className={styles.opcoes}>
                {helper &&
                  helper.map((itemHelper) => (
                    <span
                      key={itemHelper?.id}
                      className={
                        categoriaAtiva === itemHelper.nome ? styles.ativo : ""
                      }
                      onClick={() => handleCategoriaClick(itemHelper?.nome)}
                    >
                      {itemHelper.nome}
                    </span>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
  

        <Container>
          <Row>
            {products &&
              categoriaSelecionada.map((product) => (
                <Col sm={12} md={4} key={product?.id}>
                  <CardItem
                    id={product?.id}
                    imagem={product?.imagem}
                    nome={product?.nome}
                    descricao={product?.descricao}
                    preco={product?.preco}
                    textButton="Compre agora"
                    categoria={product?.categoria}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Produto;
