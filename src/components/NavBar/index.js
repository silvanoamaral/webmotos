import React, { useState } from 'react'

import bike from '../../assets/images/bike_icon.svg'
import carro from '../../assets/images/carro.svg'

import './NavBar.scss'

const NavBar = () => {
  
  const [activeTab, setActiveTab] = useState('carro')

  const onClick = e => {
    setActiveTab(e.currentTarget.dataset.item)
  }

  return (
    <div className="nav">
    <ul>
      <li onClick={onClick} data-item="carro" className={activeTab === 'carro' ? 'nav__bar-active' : 'nav__bar' }>
        <img src={carro} alt="carro" />
        <span>Comprar</span>
        carros
      </li>
      <li onClick={onClick} data-item="motos" className={activeTab === 'motos' ? 'nav__bar-active' : 'nav__bar' }>
        <img src={bike} alt="bike" />
        <span>Comprar</span>
        motos
      </li>
    </ul>
    <button className="btn__verder">Vender meu carro</button>
  </div>
  )
}

export default NavBar