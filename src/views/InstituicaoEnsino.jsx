import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

const InstituicaoEnsino = () => {
  let [instituicoesEnsino, setInstituicoesEnsino] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/instituicoesensino')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setInstituicoesEnsino([...json]);
      })
      .catch((error) => {
        console.log('Algum problema no back!');
      });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  // const [nomeGalpao, setNomeGalpao] = useState('');
  // const [quatidadeAves, setQuatidadeAves] = useState(0);

  const [galpao, setGalpao] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(galpao);
    fetch('URL', { method: 'POST', body: JSON.stringify(galpao) });
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setGalpao({ ...galpao, [name]: value });
    console.log(galpao);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={9}>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Instituição Ensino
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Nome da Instituição de Ensino"
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={3}>
          <Button className="me-2" variant="primary">
            <IoSearchSharp />
          </Button>
          <Button variant="primary" onClick={handleShow}>
            <IoMdAdd />
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Instituição de Ensino</th>
            <th>Matrículas</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {instituicoesEnsino.map((instituicaoEnsino, i) => {
            return (
              <tr>
                <td>{++i}</td>
                <td>{instituicaoEnsino.nome}</td>
                <td>{instituicaoEnsino.matriculas}</td>
                <td>{instituicaoEnsino.municipio}</td>
                <td>{instituicaoEnsino.estado}</td>
              </tr>
            );
          })}
          {/*  */}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <label for="nome">Nome Galpão:</label>
            <input
              type="text"
              name="nome"
              value={galpao.nome}
              onChange={handleChange}
            />

            <label for="quatidadeAves">Quantidade Aves:</label>
            <input
              type="text"
              name="quatidadeAves"
              value={galpao.quatidadeAves}
              onChange={handleChange}
            />
            {/* <button type='submit'></button>
            <input type="submit" /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Salvar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Container>
  );
};

export default InstituicaoEnsino;
