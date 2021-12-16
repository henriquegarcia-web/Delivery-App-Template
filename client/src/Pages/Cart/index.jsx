import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  CartContainer,
  CounterContainer
} from './style'

import { 
  // FiX,
  // FiCheckCircle,
  FiChevronsRight,
  FiPlus,
  FiMinus
} from "react-icons/fi";

import Header from '../../Containers/Header/'

import HamburguerImage from '../../Assets/Images/Hamburguer.jpg'

const Cart = () => {

  const deletItem = () => {
    console.log('deletou')
  }

  const [active, setActive] = useState(false)
  
  const TogglePaymentDetails = () => {
    setActive(!active)
  } 

  return (
    <CartContainer>

      <div className='cart__header'>
        <Header type='Cart' />
      </div>

      <div className='cart__list'>

        <div className='cart__list__item'>

          <div className='cart__item__remove_button'>
            <input type="checkbox" checked onChange={deletItem} />
          </div>

          <div className='cart__item__image'>
            <img src={HamburguerImage} alt="" />
          </div>

          <div className='cart__item__container'>

            <div className='cart__item__infos'>
              <h1>Beef Burger</h1>
            </div>

            <div className='cart__item__counter'>
              <p>R$ 19,90</p>

              <Counter />
            </div>

          </div>

        </div>

        <div className='cart__list__item'>

          <div className='cart__item__remove_button'>
            <input type="checkbox" checked onChange={deletItem} />
          </div>

          <div className='cart__item__image'>
            <img src={HamburguerImage} alt="" />
          </div>

          <div className='cart__item__container'>

            <div className='cart__item__infos'>
              <h1>Beef Burger</h1>
            </div>

            <div className='cart__item__counter'>
              <p>R$ 19,90</p>

              <Counter />
            </div>

          </div>

        </div>

        <div className='cart__list__item'>

          <div className='cart__item__remove_button'>
            <input type="checkbox" checked onChange={deletItem} />
          </div>

          <div className='cart__item__image'>
            <img src={HamburguerImage} alt="" />
          </div>

          <div className='cart__item__container'>

            <div className='cart__item__infos'>
              <h1>Beef Burger</h1>
            </div>

            <div className='cart__item__counter'>
              <p>R$ 19,90</p>

              <Counter />
            </div>

          </div>

        </div>

      </div>

      <div className='cart__payment'>

        <div className='cart__payment__main'>
          <div className='cart__payment__price'>
            <p>R$ 300,00</p>
          </div>

          <div className='cart__payment__cta'>
            <Link to='/payment'><button>Forma de pagamento</button></Link>
          </div>
        </div>

        <div className='cart__payment__details'>

          <div className={active ? 'payment__details__full' : 'payment__details__full active'}>

            <div className='minimized__container' onClick={TogglePaymentDetails}>
              <div className='minimized__symbol'></div>
            </div>

            <div className='payment__details__full__content'>

              <div className='payment__details__discount'>
                <input type="text" placeholder='Possui cupom de desconto?' />
                <FiChevronsRight />
              </div>

              <div className='payment__details'>

                <div className='payment__details__item'>
                  <p>Sub total</p>
                  <h2>R$ 450,00</h2>
                </div>

                <div className='payment__details__item'>
                  <p>Entrega</p>
                  <h2>R$ 5,00</h2>
                </div>

                <div className='payment__details__item'>
                  <p>Descontos</p>
                  <h2>R$ --</h2>
                </div>

                <div className='payment__details__item'>
                  <p>Total</p>
                  <h2><b>R$ 500,00</b></h2>
                </div>

              </div>

            </div>

          </div>

        </div>
      
      </div>

    </CartContainer>
  )
}

export default Cart

// -----------------------------------

const Counter = () => {
  return (
    <CounterContainer>
      <div className='counter__input'>
        <button><FiMinus /></button>
      </div>
      <div className='counter__text'>
        <span>1</span>
      </div>
      <div className='counter__input'>
        <button><FiPlus /></button>
      </div>
    </CounterContainer>
  )
}
