import React from 'react'
import { Link } from 'react-router-dom'

import {
  HomeContainer
} from './style'

import BgImage from '../../Assets/Images/Bg_01.jpg'

const Home = () => {
  return (
    <HomeContainer bgImage={BgImage}>

      <div className='home section'>

        <div className='home__logo'>
          <h1>BRAND</h1>
          <h2>LOGO IMAGE</h2>
        </div>

        <div className='home__main'>
          <h2>O melhor restaurante de Canoas</h2>

          <Link to='/login'><button>Login</button></Link>

          <div className='home__main__signup'>
            <p>Você não tem conta? </p>
            <p><b><Link to='/register'>Registro</Link></b></p>
          </div>
        </div>

      </div>

    </HomeContainer>
  )
}

export default Home
