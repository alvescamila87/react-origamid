import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./components/FormCustom/Input"
import Select from "./components/FormCustom/Select";
import Radio from "./components/FormCustom/Radio";
import Checkbox from "./components/FormCustom/Checkbox";
import useForm from "./customHook/useForm";
import RadioChallenge from "./Challenge/RadioChallenge";
// import Checkbox from "./Form/checkbox"
// import CheckboxLabel from "./Form/checkboxLabel"
// import CheckboxMultiplos from "./Form/checkboxMultiplos"
// import { Formulario01 } from "./Form/formulario01"
// import { Formulario02 } from "./Form/formulario02"
// import { Formulario03 } from "./Form/formulario03"
// import Radio from "./Form/radio"
// import Select from "./Form/select"
// import TextArea from "./Form/textArea"

// desafio formulário
const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


function App() {

  // form custom
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [produto, setProduto] = useState('');
  const [cor, setCor] = useState('');
  const [frutas, setFrutas] = useState('');
  const [linguagens, setLinguagens] = useState<string[]>([]); // Tipo explícito de array de strings
  const [termos, setTermos] = useState<string[]>([]); // quando o array tiver SOMENTE um elemento

  if(termos.length > 0) { // validação de item único sem precisar outro checkbox
    console.log("Enviar")
  }

  // form custom: validation
  // const [cep, setCep] = useState('');
  // const [error, setError] = useState<string | null>(null);

  // function validateCEP(value: string) {
  //   if(value.length === 0) {
  //     setError("Preencha o valor para CEP");
  //     return false;
  //   } else if (!/^\d{5}-?\d{3}$/.test(value)) {
  //     setError("Preencha um CEP válido");
  //     return false;
  //   } else {
  //     setError(null);
  //     return true;
  //   }
  // }

  // function handleBlur({target}: ChangeEvent<HTMLInputElement>) {
  //   //const regex = /^\d{5}-?\d{3}$/;
  //   //const validacao = regex.test(target.value);
  //   //console.log(validacao);
  //   validateCEP(target.value)
  //   console.log(validateCEP(target.value));
  // }

  // function handleChange({target}: ChangeEvent<HTMLInputElement>) {
  //   if(error) validateCEP(target.value);
  //   setCep(target.value)
  // }

  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   if(validateCEP(cep)) {
  //     console.log("Enviou. Faz fetch na API")
  //   } else {
  //     console.log("Não enviar. Exibe erro")
  //   }
  // }


  // form custom: customHook useForm
  const cep = useForm('cep')
  const email2 = useForm('email')
  const nome2 = useForm(); // para não passar regex, deixa em branco, omitindo o tipo geral.
  const sobrenome2 = useForm(); // para não passar regex, deixa em branco, omitindo o tipo geral.

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("Enviou. Faz fetch na API")
    } else {
      console.log("Não enviar. Exibe erro")
    }
  }

  // desafio formulário
  const [respostas, setRespostas] = useState<{[key: string]: string}>({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  function handleChange({target}: ChangeEvent<HTMLInputElement>) {
    //console.log(target)
    setRespostas({
      ...respostas,
      [target.id]: target.value // igual a fazer 'p1'
    })
  }

  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState<string | null>(null);

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({id, resposta}) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if(slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <>
      {/* <h1>Hello App</h1>
      <h2>Form 01</h2>
      <Formulario01 />
      <h2>Form 02</h2>
      <Formulario02 />
      <h2>Form 03</h2>
      <Formulario03 />
      <h2>Form com TextArea</h2>
      <TextArea />
      <h2>Form com Select</h2>
      <Select />
      <h2>Form com Radio</h2>
      <Radio />
      <h2>Form com Checkbox</h2>
      <Checkbox />
      <h2>Form com Checkbox múltiplas opções</h2>
      <CheckboxMultiplos />
      <h2>Form com Checkbox 2 - Label</h2>
      <CheckboxLabel /> */}
      <h2>Form Custom</h2>
      <form>
        <h2>Checkbox - Termos</h2>
        <Checkbox 
          options={['Li e aceito os termos']}
          value={termos}
          setValue={setTermos}
        />
        <h2>Checkbox</h2>
        <Checkbox 
          options={['Javascript', 'Java', 'React']}
          value={linguagens}
          setValue={setLinguagens}
        />
        <h2>Cores</h2>
        <Radio 
          options={['Azul', 'Vermelho']} 
          value={cor} 
          setValue={setCor}      
        />
        <h2>Frutas</h2>
        <Radio 
          options={['Limão', 'Banana', 'Mamão']} 
          value={frutas} 
          setValue={setFrutas}      
        />
        <Select 
          options={['notebook', 'tablet', 'smartphone']} 
          value={produto} 
          setValue={setProduto}
        />
        <Input id="nome" label="Nome" value={nome} setValue={setNome} />
        <Input id="email" label="Email" value={email} setValue={setEmail} />
        <button>Enviar</button>
      </form>
      <h2>Validation</h2>
      {/* <form onSubmit={handleSubmit}>
        <Input
          label="CEP"
          id="CEP"
          type="text"
          value={cep}
          onChange={handleChange}
          //setValue={setCep}
          onBlur={handleBlur} //validation
          placeholder={"00000-000"}
        />
        {cep}
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form> */}
      <h2>Validation useForm: customHook</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          id="nome"
          type="text"
          {...nome2} // Spread para passar value, onChange, onBlur e error
        />
        <Input
          label="CEP"
          id="CEP"
          type="text"          
          placeholder={"00000-000"}
          {...cep} // Spread para passar value, onChange, onBlur e error
        />
        <Input
          label="Email"
          id="email"
          type="email"
          {...email2} // Spread para passar value, onChange, onBlur e error
        />
        <button>Enviar</button>
      </form>
      <h2>Desafio Formularios</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => 
          <RadioChallenge 
            active={slide === index}
            key={pergunta.id} 
            onChange={handleChange}
            //value={pergunta[pergunta.id]}
            value={respostas[pergunta.id]}
            { ...pergunta}
          />
        )}
        {resultado ? (
          <p>{resultado}</p>
        ) : (        
        <button onClick={handleClick}>Próxima</button>
        )}
      </form>
    </>
  )
}

export default App
