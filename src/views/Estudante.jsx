import { useParams } from 'react-router';

const Estudante = () => {
  let parametros = useParams();

  return (
    <>
      <div>Estudantes: {parametros.estudante_id}</div>
    </>
  );
};

export default Estudante;
