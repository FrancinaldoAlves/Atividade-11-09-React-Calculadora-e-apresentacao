import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ExibirApresentacao from './components/Apresentacao'
import ExibirCalculadora from './components/Calculadora'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <ExibirApresentacao></ExibirApresentacao>
          <ExibirCalculadora></ExibirCalculadora>
        </div>
      </section>
    </>
  )
}

export default App
