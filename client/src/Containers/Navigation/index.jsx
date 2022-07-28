import React from 'react'
import { Link } from 'react-router-dom'

import {
  NavigationContainer
} from './style'

import {
  FiHome,
  FiHeart,
  FiShoppingBag,
  FiUser
} from 'react-icons/fi'

const Navigation = () => {
  return (
    <NavigationContainer>
      <div className='navigation__wrapper'>

        <Link to='/app'>
          <div className='navigation__item active'>
            <FiHome />
          </div>
        </Link>

        <Link to='/cart'>
          <div className='navigation__item'>
            <FiShoppingBag />
          </div>
        </Link>

        <Link to='/saves'>
          <div className='navigation__item'>
            <FiHeart />
          </div>
        </Link>

        <Link to='/perfil'>
          <div className='navigation__item'>
            <FiUser />
          </div>
        </Link>

      </div>
    </NavigationContainer>
  )
}

export default Navigation