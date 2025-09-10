import { useState } from 'react'
import './App.css'
import suedAlien1 from './assets/sued-alien-1.avif'
import LogoPuma from './assets/logo-puma-branco.png'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          {/* Aqui fica o SLIDER */}  
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={suedAlien1} alt="" className="img-card"/>
              <h2>Tênis Suede XL Alien</h2>
              <p className="desc">Formstrip bordado e uma gola acolchoada exagerada, ele mistura herança e streetwear moderno.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (479)</p>
              <p className="preco">R$ 599,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={suedAlien1} alt="" className="img-card"/>
              <h2>Tênis Suede XL Alien</h2>
              <p className="desc">Formstrip bordado e uma gola acolchoada exagerada, ele mistura herança e streetwear moderno.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (479)</p>
              <p className="preco">R$ 599,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={suedAlien1} alt="" className="img-card"/>
              <h2>Tênis Suede XL Alien</h2>
              <p className="desc">Formstrip bordado e uma gola acolchoada exagerada, ele mistura herança e streetwear moderno.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (479)</p>
              <p className="preco">R$ 599,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>

        <footer>

          <img src={LogoPuma} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="https://www.instagram.com/pumabrasil/" target="_blank">
                <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://discord.com/invite/puma" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={LogoWhats} alt="" className="whatsapp" />
              </a>
            </div>
          </div>

          <p className="txt-footer">
            PUMA SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
