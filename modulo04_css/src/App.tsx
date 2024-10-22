import './App.css';
import { Title } from './cssImport/Title';
import { Produto } from './cssModules/components/Produto';

function App() {
  return (
    <>
      <h3>css Import</h3>
      <div className="container">
        <Title />
      </div>
      <h3>css Modules</h3>
      <Produto />
    </>

  )
}

export default App
