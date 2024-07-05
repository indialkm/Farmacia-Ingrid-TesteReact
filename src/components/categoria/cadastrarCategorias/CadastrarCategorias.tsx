import { ChangeEvent, useEffect, useState } from 'react'
import { atualizar, buscar, cadastrar } from '../../../service/Service';
import Categoria from '../../../model/categoria/Categoria';
import { useNavigate, useParams } from 'react-router-dom';

function CadastrarCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
      await buscar(`/categorias/${id}`, setCategoria);
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
      })
  
      console.log(JSON.stringify(categoria))
    }
  
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/categorias`, categoria, setCategoria)
  
        alert('Categoria atualizada com sucesso')
          retornar()
  
        } catch (error: any) {
          if (error.toString().includes('400')) {
            alert('Erro na requisição!')
          } else {
            alert('Erro ao atualizar o Categoria')
          }
  
        }
  
      } else {
        try {
          await cadastrar(`/categorias`, categoria, setCategoria,)
  
          alert('Categoria cadastrado com sucesso')
  
        } catch (error: any) {
            if (error.toString().includes('400')) {
              alert('Erro na requisição!')
            } else {
              alert('Erro ao atualizar o Categoria')
            }
    
          }
      }
      retornar()
    }
  
    function retornar() {
      navigate("/categorias")
    } 

  return (
    <>
      <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre categoria' : 'Editar categoria'}
      </h1>

      <form onSubmit={gerarNovaCategoria} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Nome da Categoria</label>
          <input
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Descrição</label>
          <input
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
    </>
  )
}

export default CadastrarCategoria