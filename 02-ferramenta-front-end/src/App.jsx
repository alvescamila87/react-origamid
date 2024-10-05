import React, { useState } from "react";
import Dados from "./jsx/dados";
import Arrays1 from "./jsx/arrays1";
import Arrays2 from "./jsx/arrays2";
import Evento from "./eventos/evento";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Form from "./form/form";
import Form2 from "./restSpread/form";
import Titulo from "./propriedades/titulo";
import Subtitulo from "./propriedades/subtitulo";
import Children from "./propriedades/children";
import Header2 from "./desafioComponentes/header";
import Home from "./desafioComponentes/home";
import Produtos from "./desafioComponentes/produtos";
import ButtonModal from "./useStateProps/ButtonModal";
import Modal from "./useStateProps/Modal";
import ButtonModalCallBack from "./useStateCallback/ButtonModal";
import ModalCallBack from "./useStateCallback/Modal";
import Produto from "./useStateExercicio/produto";
import MeuProduto from "./useEffectDesmontar/Produto";
import MeuProduto2 from "./useEffectLocalStorage/Produto";
import MeuForm from "./useStateHoraDeCodar/Form";
import Contador from "./useEffectHoraDeCodar/contador";
import Video from "./useRef/video";
import Comentario from "./useRef/comentario";
import { Carrinho } from "./useRefSetTimeout/carrinho";
import Contagem from "./useMemo/contagem";
import ContagemCallback from "./useCallback/contagemCallback";

const titulo = <h1>Título da página</h1>

const Teste = () => {
  const active = true;

  if(active) {
    return <p>Teste</p>
  } else {
    return null
  }

};

const App = () => {

  const nome = "Camila"
  const ativo = false;

  function mostrarNome(sobrenome) {
    return "Marlene " + sobrenome
  }

  const carro = {
    marca: 'VW',
    modelo: 'Golf',
    rodas: '4'
  }

  const estiloP = {
    color: 'blue',
    fontSize: "2rem",
  }

  // desafio de componentes: simulando um router
  let Pagina = Home;
  const { pathname } = window.location
  // console.log(pathname)
  if(pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }

  // useState: fonte da verdade
  //const ativo2 = false;

  // useState: 
  // const ativoHook = React.useState('test');
  // console.log(ativoHook)
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  // useState: desestruturar
  const [ativo3, setAtivo3] = React.useState(false);

  // useState: multiplos estados
  const [dados, setDados] = React.useState({ nome: "Madalena", idade: "30"})

  // useState: Props
  const [modal, setModal] = React.useState(false);  

  function handleClick() {
    //atualizaValor(!ativoValor)
    setAtivo3(!ativo3)
    setDados({...dados, faculdade: 'Possui'})
  }

  // useState: Reatividade
  const [items, setItems] = React.useState('Teste');

  function handleClick2() {
    setItems('Outros')
  }

  // useState: Callback
  const [modal2, setModal2] = React.useState(() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo;
  }); 

  // useState: Contar
  const [contar, setContar] = React.useState(1);
  const [items2, setItems2] = React.useState(['Item 1']);

  function handleClick3() {
    setContar((contar) => {
      return contar + 1;
    })
    setItems2((items2) => [...items2, 'Item ' + (contar + 1)])
  }

  //useState(): Fetch: Exercício puxar dados em formato JSON
  const [dados2, setDados2] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick4(event) {
    setCarregando(true);

    //console.log(event.target.innerText)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    console.log(response)
    const json = await response.json()
    console.log(json)
    setDados(json); 
    setCarregando(false);
  }

  //useEffect(): ciclo de vida: Montou
  const [contar2, setContar2] = React.useState(0);

  //console.log("Executou Fora")
  React.useEffect(() => {
    console.log('Executou');
  }, [])

  // const Titulo = 'Total ';
  React.useEffect(() => {
      document.title = "Total " + contar2
  }, [contar2])

  //useEffect(): Componente Montou
  const [contar3, setContar3] = React.useState(0);
  const [dados3, setDados3] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados3(json));
  }, [])

  //useEffect(): Antes do componente desmontar
  const [ativo4, setAtivo4] = React.useState(false);

  // useState: Produto LocalStorage (Application > LocalStorage)
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal !== null) setProduto(produtoLocal)
    console.log(produtoLocal)
  }, [])

  React.useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto]);

  function handleClick5({ target }) {    
    setProduto(target.innerText);
  }
  
  return (
    <> 
      <p style={estiloP}>JSX 1</p>    
      {/* {titulo}
      {mostrarNome('Theodora')}
      <p>{true ? 'Ativo' : 'Inativo'} - { 10 }</p>
      <p>{new Date().getFullYear()}</p>
      <p style={estiloP}>Informações do carro (objeto)</p>
      <p style={estiloP}>{carro.marca}</p>
      <p style={estiloP}>{carro.modelo}</p>
      <p style={estiloP}>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{nome}</p> */}

      <p style={estiloP}>JSX 2</p>
      {/* <Dados /> */}
      <p style={estiloP}>JSX 2 - Arrays</p>
      {/* <Arrays1 /> */}
      <p style={estiloP}>JSX 2 - Arrays</p>
      {/* <Arrays2 /> */}
      <p style={estiloP}>Eventos: onClick | handleClick </p>
      {/* <Evento />  */}
      <p style={estiloP}>Components</p>     

      {/* <Teste />
      <Header />
      <Form />
      <Footer /> */}

      <p style={estiloP}>Propriedade | Props</p>    
      {/* <Titulo cor="red" texto="Texto para o título 1" /> 
      <Titulo cor="green" texto="Texto para o título 2" /> 
      <Subtitulo cor="orange" descricao="Subtítulo para texto" /> */}
      
      <p style={estiloP}>Propriedade | Props: Children</p>    
      {/* <Children 
        titulo="H1: Título"
        subtitulo="H2: Subtítulo"
        descricao="Texto a ser descrito com lorem ipsum">
      </Children> */}

      <p style={estiloP}>Propriedade | Props: Rest e Spread</p>
      {/* <Form2 />   */}

      <p style={estiloP}>Desafio Componentes</p>
      {/* <div>
        <Header2 />  
        <Pagina />
      </div> */}

      <p style={estiloP}>useState()</p>
      {/* <button disabled={!ativo2}>{ativo2 ? 'Ativo' : 'Inativo'}</button> */}
      {/* <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button> */}
      {/* <div>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick}>{ativo3 ? 'Ativo' : 'Inativo'}</button>
      </div> */}

      <p style={estiloP}>useState(): PROPS (modal: onClick)</p>
      {/* <div>
        {/* <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div> */}
        {/*<Modal modal={modal} setModal={setModal}/>
        <ButtonModal setModal={setModal}/>
      </div> */}

      <p style={estiloP}>useState(): Reatividade</p>
      {/* <p>{items}</p>
      <button onClick={handleClick2}>Clicar</button> */}

      <p style={estiloP}>useState(): Reatividade</p>
      {/* <div>
        <ModalCallBack modal={modal} setModal={setModal}></ModalCallBack>
        <ButtonModalCallBack setModal={setModal} />
      </div> */}

      <p style={estiloP}>useState(): Iterar item</p>
      {/* <div>
        {items2.map(item2 => (
          <li key={item2}>{item2}</li> 
        ))}
        <button onClick={handleClick3}>{contar}</button>
      </div>       */}
      <p style={estiloP}>useState(): Fetch: Exercício puxar dados em formato JSON</p>
      {/* <div>
        <button style={{ margin: ".5rem" }} onClick={handleClick4}>Notebook</button>
        <button style={{ margin: ".5rem" }} onClick={handleClick4}>Tablet</button>
        <button style={{ margin: ".5rem" }} onClick={handleClick4}>Smartphone</button>  
        {carregando && <p>Carregando...</p>}      
        {!carregando && dados && <Produto dados={dados} />}
        {dados ? <Produto dados={dados} /> : 'Sem produtos'} 
      </div> */}
      <p style={estiloP}>useEffect(): Ciclo de vida: inicial, atualização, desativação para sumir</p>
      {/* <button onClick={() => setContar2(contar2 + 1)}>{contar2}</button> */}

      <p style={estiloP}>useEffect(): Componente Montou</p>
      {/* <div>
        {dados && <div>
          <h1>{dados3.nome}</h1>
          <p>R$ {dados3.preco * contar3}</p>
        </div>}
      <button onClick={() => setContar3(contar3 + 1)}>{contar3}</button>
      </div> */}

      <p style={estiloP}>useEffect(): Efeito antes de desmontar (elemento que vai sair da tela)</p>
      {/* <div>
        {ativo4 && <MeuProduto />}
        <button onClick={() => setAtivo4(!ativo4)}>Ativar</button>
      </div> */}
      <p style={estiloP}>useEffect(): Produto LocalStorage</p>
      {/* <div>
        <h1>Preferência: {produto}</h1>
        <button  onClick={handleClick5} style={{marginRight: "1rem"}}>notebook</button>
        <button onClick={handleClick5} >smartphone</button>
        <MeuProduto2 produto={produto}/>
      </div> */}
      <p style={estiloP}>useState(): Form Hora de Codar</p>
      <MeuForm />
      <p style={estiloP}>useEffect(): Count Hora de Codar</p>
      <Contador />
      <p style={estiloP}>useRef(): Video</p>
      {/* <Video /> */}
      <p style={estiloP}>useRef(): Comentários</p>
      <Comentario />
      <p style={estiloP}>useRef(): Referência</p>
      <Carrinho />
      <p style={estiloP}>useMemo(): Count</p>
      <Contagem />
      <p style={estiloP}>useCallback(): Count</p>
      <ContagemCallback />
    </>
  )
}

export default App
