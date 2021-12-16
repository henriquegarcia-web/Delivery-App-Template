import React from 'react'

import {
  ShowcaseContainer
} from './style'

const Showcase = ({ referenceId, header, products }) => {
  return (
    <ShowcaseContainer id={referenceId}>
      <div className='showcase__header'>
        <h2>{header}</h2>
      </div>

      <div className='showcase__carousel'>
        <div className='showcase__carousel__wrapper'>

          {products.map(({ id, title, price, image }) => {
            return (
              <ShowcaseItem key={id} title={title} price={price} image={image} />
            )
          })}

        </div>
      </div>
    </ShowcaseContainer>
  )
}

export default Showcase

// ---------------------------------------- 

export const ShowcaseItem = ({ title, price, image }) => {
  return (
    <div className='showcase__item'>

      <div className='showcase__item__image'>
        <img src={image} alt="" />
      </div>

      <div className='showcase__item__title'>
        <h2>{title}</h2>
      </div>

      <div className='showcase__item__price'>
        <h3>R$ {price}</h3>
      </div>
    </div>
  )
}
