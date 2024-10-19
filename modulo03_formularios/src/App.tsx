import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./components/FormCustom/Input"
import Select from "./components/FormCustom/Select";
import Radio from "./components/FormCustom/Radio";
import Checkbox from "./components/FormCustom/Checkbox";
// import Checkbox from "./Form/checkbox"
// import CheckboxLabel from "./Form/checkboxLabel"
// import CheckboxMultiplos from "./Form/checkboxMultiplos"
// import { Formulario01 } from "./Form/formulario01"
// import { Formulario02 } from "./Form/formulario02"
// import { Formulario03 } from "./Form/formulario03"
// import Radio from "./Form/radio"
// import Select from "./Form/select"
// import TextArea from "./Form/textArea"

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
  const [cep, setCep] = useState('');
  const [error, setError] = useState<string | null>(null);

  function validateCEP(value: string) {
    if(value.length === 0) {
      setError("Preencha o valor para CEP");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({target}: ChangeEvent<HTMLInputElement>) {
    //const regex = /^\d{5}-?\d{3}$/;
    //const validacao = regex.test(target.value);
    //console.log(validacao);
    validateCEP(target.value)
    console.log(validateCEP(target.value));
  }

  function handleChange({target}: ChangeEvent<HTMLInputElement>) {
    if(error) validateCEP(target.value);
    setCep(target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(validateCEP(cep)) {
      console.log("Enviou. Faz fetch na API")
    } else {
      console.log("Não enviar. Exibe erro")
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
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  )
}

export default App
