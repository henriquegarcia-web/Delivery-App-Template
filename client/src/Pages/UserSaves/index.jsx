import React from 'react'
// import { Link } from 'react-router-dom'

import {
  UserSavesContainer
} from './style'

import { 
  FiHeart 
} from "react-icons/fi";

import Header from '../../Containers/Header/'

import HamburguerImage from '../../Assets/Images/Hamburguer.jpg'

const UserSaves = () => {
  return (
    <UserSavesContainer>

      <div className='user_saves__header'>
        <Header type='UserSaves' />
      </div>

      <div className='user_saves__contents'>

        <div className='user_saves__item'>
          <div className='user_saves__item__image'>
            <img src={HamburguerImage} alt="" />
          </div>
          <div className='user_saves__item__infos'>
            <h1>Beef Burguer</h1>
            <h2>Hamburguers</h2>
            <p>R$ 30,00</p>
          </div>
          <div className='user_saves__item__cta'>
            <FiHeart />
          </div>
        </div>

        <div className='user_saves__item'>
          <div className='user_saves__item__image'>
            <img src={HamburguerImage} alt="" />
          </div>
          <div className='user_saves__item__infos'>
            <h1>Beef Burguer</h1>
            <h2>Hamburguers</h2>
            <p>R$ 30,00</p>
          </div>
          <div className='user_saves__item__cta'>
            <FiHeart />
          </div>
        </div>
        
      </div>

    </UserSavesContainer>
  )
}

export default UserSaves
