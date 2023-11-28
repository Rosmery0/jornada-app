import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JornadaFormulario from "./componentes/formulario/JornadaFormulario";
import Menu from "./componentes/nav-bar/Menu";
import TablaRegistros from "./componentes/formulario/TablaRegistros";
import Login from "./componentes/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/formulario"
          element={ <JornadaFormulario /> }
        />
        <Route 
          path="/menu"
          element={ <Menu /> }
        />
        <Route 
          path="/registros"
          element={ <TablaRegistros /> }
        />
        <Route 
          path="/"
          element={ <Login /> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
