import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './views/Home';
import InstituicaoEnsino from './views/InstituicaoEnsino';
import Estudante from './views/Estudante';
import CensoEscolarLayout from './layouts/CensoEscolarLayout';

// Testando a branch.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CensoEscolarLayout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="instituicoesensino"
            element={<InstituicaoEnsino />}
          ></Route>
          <Route
            path="estudantes/:estudante_id"
            element={<Estudante />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
