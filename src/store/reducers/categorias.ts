import { createSlice } from '@reduxjs/toolkit'
import { Categorys } from 'interfaces/Categorys';

const initialState: Array<Categorys> = [{
    nome: 'Eletrônicos',
    thumbnail: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/thumbnail/eletronicos.png',
    header: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/header/eletronicos.png',
    id: 'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
  }, {
    nome: 'Automotivo',
    thumbnail: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/thumbnail/automotivo.png',
    header: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/header/automotivo.png',
    id: 'automotivos',
    descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
  }, {
    nome: 'Jogos',
    thumbnail: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/thumbnail/jogos.png',
    header: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/header/jogos.png',
    id: 'jogos',
    descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
  }, {
    nome: 'Escritório',
    thumbnail: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/thumbnail/escritorio.png',
    header: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/header/escritorio.png',
    id: 'escritorio',
    descricao: 'Tudo para o que escritório ficar incrível!'
  }, {
    nome: 'Som e imagem',
    thumbnail: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/thumbnail/som.png',
    header: 'https://raw.githubusercontent.com/alura-cursos/trato-tech/Aula3/src/assets/categorias/header/som.png',
    id: 'som',
    descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}];

const categorysSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {}
})

export default categorysSlice.reducer