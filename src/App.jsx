import { useState } from 'react'
import './App.css'
import Contador from './componentes/contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Guilda de Front End</h1>
        <p>Olá, mundo!</p>

      </div>
      <Contador />
    </>
  )
}

export default App
