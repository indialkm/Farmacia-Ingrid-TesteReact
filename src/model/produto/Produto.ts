import Categoria from "../categoria/Categoria";
export default interface Produto {
    id: number;
    nome: string;
    descricao?: string | null;
    quantidade: number;
    laboratorio?: string | null;
    preco: number;
    foto?: string | null;
    categoria?: Categoria | null;
  }