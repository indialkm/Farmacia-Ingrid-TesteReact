import React, { useEffect, useState } from 'react';
import Categoria from '../../../model/categoria/Categoria';
import { buscar } from '../../../service/Service';
import CardCategorias from '../cardCategorias/CardCategorias';

function ListarCategorias() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  async function buscarCategoria() {
    try {
      await buscar('/categorias', setCategoria, {
       
      });
    } catch (error: any) {
    
      console.error('Erro ao buscar Categoria:', error);
    }
  }

  useEffect(() => {
    buscarCategoria();
  }, []);

  return (
    <>
       
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategorias;
