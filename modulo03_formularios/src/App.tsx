import Checkbox from "./Form/checkbox"
import CheckboxLabel from "./Form/checkboxLabel"
import CheckboxMultiplos from "./Form/checkboxMultiplos"
import { Formulario01 } from "./Form/formulario01"
import { Formulario02 } from "./Form/formulario02"
import { Formulario03 } from "./Form/formulario03"
import Radio from "./Form/radio"
import Select from "./Form/select"
import TextArea from "./Form/textArea"

function App() {


  return (
    <>
      <h1>Hello App</h1>
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
      <CheckboxLabel />
    </>
  )
}

export default App
