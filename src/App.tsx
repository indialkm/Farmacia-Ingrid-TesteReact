import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ListarCategorias from './components/categoria/listarCategorias/ListarCategorias';
import CadastrarCategoria from './components/categoria/cadastrarCategorias/CadastrarCategorias'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadastrarCategorias" element={<CadastrarCategoria />} />
          <Route path="/editarcategorias/:id" element={<CadastrarCategoria />} />
          <Route path="/deletarCategorias/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
