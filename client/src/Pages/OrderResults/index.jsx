import React from 'react'
import { Link } from 'react-router-dom'

import {
  OrderResultsContainer
} from './style'

import Header from '../../Containers/Header/'

import MotoboyImage from '../../Assets/Images/Motoboy.png'
import ErrorImage from '../../Assets/Images/Error.png'

const OrderResults = () => {
  return (
    <OrderResultsContainer>
      
      <div className='order_result__header'>
        <Header type='OrderResult' />
      </div>

      <div className='order_result__contents'>
        
        <div className='order_result__contents__success active'>

          <div className='order_result__success__image'>
            <img src={MotoboyImage} alt="" />
          </div>

          <div className='order_result__success__message'>
            <p>Uhuu! Seu pedido foi encaminhado com sucesso!</p>
            <p>Em breve o motoboy entregará seu pedido.</p>
          </div>

          <div className='order_result__success__ctas'>
            <Link to='/pedidos'><button>Ver o pedido</button></Link>
            <Link to='/app'><button>Voltar à loja</button></Link>
          </div>

        </div>

        <div className='order_result__contents__error'>

          <div className='order_result__error__image'>
            <img src={ErrorImage} alt="" />
          </div>

          <div className='order_result__error__message'>
            <p>Ops! Parece que algo deu errado!</p>
            <p>Tente novamente ou entre em contato com o estabelecimento.</p>
          </div>

          <div className='order_result__error__ctas'>
            <Link to='/cart'><button>Voltar ao carrinho</button></Link>
          </div>

        </div>

      </div>

    </OrderResultsContainer>
  )
}

export default OrderResults
