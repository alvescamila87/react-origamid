import { Formulario01 } from "./Form/formulario01"
import { Formulario02 } from "./Form/formulario02"
import { Formulario03 } from "./Form/formulario03"
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
    </>
  )
}

export default App
