import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const InstituicoesEnsinoRankingCard = ({ instituicoesEnsino }) => {
  return (
    <Container>
      <Row>
        {instituicoesEnsino.map((instituicaoEnsino, indice) => {
          return (
            <Col key={indice}>
              <Card>
                <Card.Img variant="top" src={instituicaoEnsino.urlImagem} />
                <Card.Body>
                  <Card.Title>{instituicaoEnsino.nome}</Card.Title>
                  <Card.Text>
                    Município: {instituicaoEnsino.municipio}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default InstituicoesEnsinoRankingCard;
