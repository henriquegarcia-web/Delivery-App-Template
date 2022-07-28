import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  MenuMobileContainer
} from './style'

import { 
  FiMenu,
  FiUser,
  FiX,
  FiHeart,
  FiShoppingCart,
  FiChevronLeft,
  FiMoreHorizontal,
} from "react-icons/fi";

import { MainData } from '../../Data/data';

// ----------------------------------------

const Header = ({ type }) => {
  return (
    <HeaderContainer>
      <HeaderRender type={type} />
    </HeaderContainer>
  )
}

export default Header

// ---------------------------------------- HEADER RENDER

const HeaderRender = ({ type }) => {

  let elementToRender

  switch (type) {

    case 'HomeApp':
      elementToRender = <HeaderHomeApp />
      break;
    
    case 'ProductDetail':
      elementToRender = <HeaderProductDetail />
      break;
  
    case 'Cart':
      elementToRender = <HeaderCart />
      break;

    case 'Payment':
      elementToRender = <HeaderPayment />
      break;

    case 'OrderResult':
      elementToRender = <HeaderOrderResult />
      break;

    case 'UserInfo':
      elementToRender = <HeaderUserInfo />
      break;
    
    case 'UserSaves':
      elementToRender = <HeaderUserSaves />
      break;
    
    default:
      break;
  }

  return (
    <div className='header__wrapper'>
      {elementToRender}
    </div>
  )
}

// ---------------------------------------- FUNÇÕES DE CADA HEADER

const userInfo = MainData.accounts.users[0]

const user = {
  name: userInfo.name,
  image: (userInfo.image ? <img src={userInfo.image} alt="" /> : <FiUser />)
}

const HeaderHomeApp = () => {
  return (
    <>
      <MenuMobile />

      <Link to='/perfil'>
        <div className='header__item'>
          {user.image}
        </div>
      </Link>
    </>
  )
}

const HeaderProductDetail = () => {
  return (
    <>
      <Link to='/app'>
        <div className='header__item'>
          <FiChevronLeft />
        </div>
      </Link>

      <div className='header__title'>
        <h2>Detalhes</h2>
      </div>

      <Link to='/saves'>
        <div className='header__item'>
          <FiHeart />
        </div>
      </Link>
    </>
  )
}

const HeaderCart = () => {
  return (
    <>
      <Link to='/app'>
        <div className='header__item'>
          <FiChevronLeft />
        </div>
      </Link>

      <div className='header__title'>
        <h2>Carrinho</h2>
      </div>

      <Link to='/perfil'>
        <div className='header__item'>
          {user.image}
        </div>
      </Link>
    </>
  )
}

const HeaderPayment = () => {
  return (
    <>
      <Link to='/cart'>
        <div className='header__item'>
          <FiChevronLeft />
        </div>
      </Link>

      <div className='header__title'>
        <h2>Pagamento</h2>
      </div>

      <Link to='/perfil'>
        <div className='header__item'>
          {user.image}
        </div>
      </Link>
    </>
  )
}

const HeaderOrderResult = () => {

  const result = 'Sucesso'

  return (
    <>
      <Link to='/app'>
        <div className='header__item'>
          <FiChevronLeft />
        </div>
      </Link>

      <div className='header__title'>
        <h2>{result}</h2>
      </div>

      <Link to='/perfil'>
        <div className='header__item'>
          {user.image}
        </div>
      </Link>
    </>
  )
}

const HeaderUserInfo = () => {
  return (
    <>
      <Link to='/app'>
        <div className='header__item'>
          <FiChevronLeft />
        </div>
      </Link>

      <div className='header__title'>
        <h2>Minha conta</h2>
      </div>

      <Link to='/perfil'>
        <div className='header__item'>
          {user.image}
        </div>
      </Link>
    </>
  )
}

const HeaderUserSaves = () => {
  return (
    <>
      <Link to='/app'>
        <div className='header__item'>
          <FiChevronLeft />
        </div>
      </Link>

      <div className='header__title'>
        <h2>Favoritos</h2>
      </div>

      <Link to='/perfil'>
        <div className='header__item'>
          {user.image}
        </div>
      </Link>
    </>
  )
}

// -------------------------------------------

export const MenuMobile = () => {

  const userName = MainData.accounts.users[0]

  const [active, setMode] = useState(false)
  
  const ToggleMode = () => {
    setMode(!active)
  } 

  return (
    <MenuMobileContainer onClick={ToggleMode}>
      <div className={active ? 'menu__icon active' : 'menu__icon'}>
        {active ? <FiX /> : <FiMenu /> }
      </div>

      <div className={active ? 'menu__contents active' : 'menu__contents'}> 
        <div className='menu__contents__header'>
          <h2>Olá, <b>{userName.name}</b></h2>
        </div>

        <div className='menu__contents__functionalities'>

          <h3>O que você procura?</h3>
          <ul>
            <li><FiShoppingCart /><Link to='/cart'>Carrinho</Link></li>
            <li><FiHeart /><Link to='/'>Favoritos</Link></li>
            <li><FiUser /><Link to='/'>Minha Conta</Link></li>
          </ul>

        </div>

        <button>Sair</button>
      </div>

      <div className={active ? 'background__locker active' : 'background__locker'} onClick={ToggleMode}></div>
    </MenuMobileContainer>
  )
}
