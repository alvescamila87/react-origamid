import { useState } from "react";
import Input from "./components/FormCustom/Input"
import Select from "./components/FormCustom/Select";
import Radio from "./components/FormCustom/Radio";
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

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [produto, setProduto] = useState('');
  const [cor, setCor] = useState('');
  const [frutas, setFrutas] = useState('');

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
    </>
  )
}

export default App
