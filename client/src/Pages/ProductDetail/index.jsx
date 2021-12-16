import React, { useState } from 'react'

import {
  ProductDetailContainer
} from './style'

import { 
  FiX,
  FiRotateCcw
} from "react-icons/fi";


import Header from '../../Containers/Header/'

import HamburguerImage from '../../Assets/Images/Hamburguer.jpg'
import IngredientImage from '../../Assets/FoodIcons/003-molhos.png'
import { MainData } from '../../Data/data';

const ProductDetail = () => {
  return (
    <ProductDetailContainer>
      
      <div className='product_detail__header'>
        <Header type='ProductDetail' />
      </div>

      <div className='product_detail__product'>

        <div className='product__image'>
          <img src={HamburguerImage} alt="" />
        </div>

        <div className='product__infos'>

          <div className='product__infos__header'>

            <div className='product__infos__title'>
              <h1>Hambúrguer do Chef a moda da casa</h1>
            </div>

            <div className='product__infos__counter'>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>

          </div>

          <div className='product__infos__ingredients'>

            <h2>Ingredientes</h2>

            <div className='ingredients__wrapper'>

              <div className='ingredient'>

                <div className='ingredient__image'>
                  <img src={IngredientImage} alt="" />
                </div>
                <div className='ingredient__title'>
                  <p>KetChup</p>
                </div>

              </div>

              <div className='ingredient'>

                <div className='ingredient__image'>
                  <img src={IngredientImage} alt="" />
                </div>
                <div className='ingredient__title'>
                  <p>Mostarda</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className='product__description'>
          <h2>Descrição</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium dolorum exercitationem suscipit modi laborum! Et, facilis. Harum officia nostrum repellendus laborum. Accusantium, repellendus tenetur ad hic cum veniam ex iste!</p>
        </div>

        <div className='product__selectors'>
          
          <ProductSelectors type='remove' />

          <ProductSelectors type='mandatory' />
          <ProductSelectors type='additional' />

        </div>

      </div>

      <div className='product_detail__add_to_cart'>
        <div className='add_to_cart__contents'>
          <div className='add_to_cart__price'>
            <h2>R$ 129,90</h2>
          </div>

          <div className='add_to_cart__cta'>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>

    </ProductDetailContainer>
  )
}

export default ProductDetail

// --------------------------------------------

export const ProductSelectors = ({ type }) => {

  let elementToRender

  switch (type) {
    case 'remove':
      elementToRender = <RemoveList data={MainData.products.products[0].ingredients} />
      break;

    case 'mandatory':
      elementToRender = <MandatoryList data={MainData.products.products[0].mandatoryItems} />
      break;
  
    case 'additional':
      elementToRender = <AdditionalList data={MainData.products.products[0].additionalItems} />
      break;

    default:
      break;
  }

  return (
    <>
      {elementToRender}
    </>
  )
}


export const RemoveList = ({ data }) => {

  const [active, setMode] = useState(false)
  
  const ToggleMode = () => {
    setMode(!active)
  } 

  return (
    <div className='list product__selectors__list'>

      <div className='list__header'>
        <div className='list__header__background'>
          <p className='header'>Deseja remover alguma coisa?</p>
        </div>
      </div>

      <div className='list__wrapper'>
        {data.map(({ id, name }) => {
          return (
            <div className='list__item' key={id}>
              <div className='list__item__title'>
                <p>{name}</p>
              </div>
              <div className={active ? 'list__item__input__label active' : 'list__item__input__label'}>
                <p>Removido</p>
              </div>
              <div className='list__item__input' onClick={ToggleMode}>
                <button>{active ? <FiRotateCcw /> : <FiX />}</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export const MandatoryList = ({ data }) => {
  return (
    <div className='list product__selectors__mandatory_list'>

      <div className='list__header'>
        <div className='list__header__background'>
          <div className='list__header__background__contents'>
            <p>Selecione o molho</p>
            <span>Obrigatório</span>
          </div>
          <p><b>0</b> de <b>2</b></p>
        </div>
      </div>

      <div className='list__wrapper'>
        {data.map(({ id, name, price }) => {
          return (
            <div className='list__item' key={id}>
              <div className='list__item__title'>
                <p>{name}</p>
                <p>{price ? `R$ ${price},00` : ''}</p>
              </div>

              <div className='list__item__input'>
                <input type="radio" name="name" id="" />
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export const AdditionalList = ({ data }) => {

  return (
    <div className='list product__selectors__additional_list'>

      <div className='list__header'>
        <div className='list__header__background'>
          <p className='header'>Itens adicionais</p>
        </div>
      </div>

      <div className='list__wrapper'>
        {data.map(({ id, name, price }) => {
          return (
            <div className='list__item' key={id}>
              <div className='list__item__title'>
                <p>{name}</p>
                <p>{price ? `R$ ${price},00` : ''}</p>
              </div>

              <div className='list__item__input'>
                <input type="radio" name="name" id="" />
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}