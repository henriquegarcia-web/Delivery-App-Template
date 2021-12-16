import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  PaymentContainer
} from './style'

import Header from '../../Containers/Header/'

import HamburguerImage from '../../Assets/Images/Hamburguer.jpg'

const Payment = () => {

  const [active, setActive] = useState(false)
  
  const TogglePaymentDetails = () => {
    setActive(!active)
  } 

  return (
    <PaymentContainer>
      
      <div className='payment__header'>
        <Header type='Payment' />
      </div>

      <div className='payment__settings'>
        <AddressSection />
        <PaymentSection />
      </div>

      <div className='payment__send_order'>
        <div className='payment__send_order__main'>
          <div className='payment__send_order__cta'>
            <Link to='/order-result'><button>Finalizar pedido</button></Link>
          </div>
        </div>
        <div className={active ? 'payment__send_order__details' : 'payment__send_order__details active'} >     
          <div className='minimized__container' onClick={TogglePaymentDetails}>
            <div className='minimized__symbol'></div>
          </div>
          <div className='payment__send_order__content'>
            <div className='send_order__details'>
              <div className='send_order__details__item'>
                <p>Total</p>
                <h2><b>R$ 500,00</b></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </PaymentContainer>
  )
}

export default Payment

// -----------------------------------

export const AddressSection = () => {
  return (
    <div className='payment__section'>
      <div className='payment__section__header'>
        <h2>Endereço de entrega</h2>
        <button>Alterar</button>
      </div>

      <div className='payment__section__address'>
        <div className='address__selected'>
          <div className='address__selected__image'>
            <img src={HamburguerImage} alt="" />
          </div>
          <div className='address__selected__infos'>
            <h2>Minha casa</h2>
            <p>Rua Hélio Fraga de Moraes Sarmento</p>
          </div>
        </div>

        <div className='address__form'>

        </div>
      </div>
    </div>
  )
}

export const PaymentSection = () => {
  return (
    <div className='payment__section'>
      <div className='payment__section__header'>
        <h2>Forma de pagamento</h2>
      </div>

      <div className='payment__section__payment_way'>
        <div className='payment_way__form'>

          <div className='payment_way__form__item'>
            <input type="radio" name="payment_way" />
            <p>Dinheiro</p>
          </div>

          <div className='payment_way__form__item'>
            <input type="radio" name="payment_way" />
            <p>Cartão ( Visa, Master, Sodexo )</p>
          </div>

          <div className='payment_way__form__item'>
            <input type="radio" name="payment_way" />
            <p>PIX</p>
          </div>

        </div>
      </div>
      
    </div>
  )
}