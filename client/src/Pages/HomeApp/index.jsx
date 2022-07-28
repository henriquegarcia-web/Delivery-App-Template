import React from 'react'
import { Link as LinkScroll } from 'react-scroll'

import {
  HomeAppContainer
} from './style'

import Showcase from '../../Containers/Showcase'
import Header from '../../Containers/Header'
import Navigation from '../../Containers/Navigation'

import { 
  FiSearch 
} from "react-icons/fi";
import { MainData } from '../../Data/data';


const HomeApp = () => {

  const popularProducts = MainData.products.products
  const showcaseCategories = MainData.products.categories

  return (
    <HomeAppContainer>
      <div className='home_app section'>

        <div className='home_app__hud__header'>
          <Header type='HomeApp' />
        </div>

        {/* Main Container - Título, SearchBox e Navbar de Categorias */}
        <div className='home_app__main_content'>
          <h2>Encontre e peça <b>um hambúrguer para você 🍔</b></h2>
          <div className='main_content__search_box'>
            <input type="text" placeholder='Procure por algo' />
            <FiSearch />
          </div>
          <div className='main_content__categories'>
            <CategoriesNavbar />
          </div>
        </div>

        {/* Showcase - Mais propulares */}
        <div className='home_app__showcase__popular'>
          <Showcase header='Mais populares' products={popularProducts} />
        </div>

        {/* Showcases - Categorias */}
        <div className='home_app__showcases'>
          {showcaseCategories.map(({ id, title, products }) => {
            return (
              <Showcase key={id} referenceId={id} header={title} products={products} />
            )
          })}
        </div>

        <div className='home_app__hud__navigation'>
          <Navigation />
        </div>

      </div>
    </HomeAppContainer>
  )
}

export default HomeApp

// ---------------------------------------- 

const CategoriesNavbar = () => {

  const categories = MainData.products.categories

  return (
    <>
      {categories.map(({ id, title, icon, link }) => {
        return (
          <LinkScroll to={id} spy={true} smooth={true} offset={-100} key={id}>
            <div className='category__container'>
              <img src={icon} alt="" />
              <p>{title}</p>
            </div>
          </LinkScroll>
        )
      })}
    </>
  )
}