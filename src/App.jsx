import { useState } from 'react'
import './App.css'
import suedAlien1 from './assets/sued-alien-1.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">
          
          {/* Card 1 */}
          <div className="card">
            <img src={suedAlien1} alt="" className="img-card"/>
            <h2>Tênis Suede XL Alien</h2>
            <p className="desc">Formstrip bordado e uma gola acolchoada exagerada, ele mistura herança e streetwear moderno.</p>
            <p className="classificacao"> ★ ★ ★ ★ ☆ (479)</p>
            <p className="preco">R$ 599,99</p>
            <p className="off">- 5%</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={suedAlien1} alt="" className="img-card"/>
            <h2>Tênis Suede XL Alien</h2>
            <p className="desc">Formstrip bordado e uma gola acolchoada exagerada, ele mistura herança e streetwear moderno.</p>
            <p className="classificacao"> ★ ★ ★ ★ ☆ (479)</p>
            <p className="preco">R$ 599,99</p>
            <p className="off">- 5%</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={suedAlien1} alt="" className="img-card"/>
            <h2>Tênis Suede XL Alien</h2>
            <p className="desc">Formstrip bordado e uma gola acolchoada exagerada, ele mistura herança e streetwear moderno.</p>
            <p className="classificacao"> ★ ★ ★ ★ ☆ (479)</p>
            <p className="preco">R$ 599,99</p>
            <p className="off">- 5%</p>
          </div>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
