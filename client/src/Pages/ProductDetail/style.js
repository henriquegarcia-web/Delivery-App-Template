import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const ProductDetailContainer = styled(PageContainer)`
  flex-direction: column;

  .product_detail__header {
    background: var(--background);
    position: fixed;
    width: 100%;
    height: fit-content;
    left: 0;
    top: 0;
    padding: 5px 25px;
  }

  .product_detail__product {
    width: 100%;
    margin-top: 60px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;

    .product__image {
      width: 100%;
      height: 260px;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .product__infos {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      .product__infos__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        
        .product__infos__title {
          width: calc(100% - 110px);
  
          h1 {
            font-size: 18px;
            font-weight: 600;
          }
        }
  
        .product__infos__counter {
          width: 100px;
          height: 36px;
          margin-left: 10px;
          display: flex;
          align-items: center;
          background: var(--grey);
          border-radius: 10px;
  
          p {
            width: 30px;
            font-size: 18px;
            font-weight: 500;
            text-align: center;
            color: var(--svg);
          }
  
          button {
            padding: 0 10px;
            font-size: 18px;
            font-weight: 500;
            width: 35px;
            background: transparent;
            color: var(--svg);
          }
        }
      }

      .product__infos__ingredients {
        padding: 10px 0;
        
        h2 {
          font-size: 17px;
          font-weight: 400;
          margin-bottom: 15px;
        }

        .ingredients__wrapper {
          display: flex;

          .ingredient {
            margin-right: 10px;
            border-radius: 6px;
            padding: 10px;
            background: var(--grey);

            .ingredient__image {
              width: 100%;
              height: fit-content;
              text-align: center;
              margin-bottom: 2px;

              img {
                width: 30px;
              }
            }

            .ingredient__title {
              text-align: center;

              p {
                font-size: 13px;
                font-weight: 300;
                color: var(--svg);
              }
            }

          }
        }
      }
    }

    .product__description {
      h2 {
        font-size: 17px;
        font-weight: 400;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        font-weight: 300;
        text-align: justify;
        line-height: 1.5;
        color: var(--svg);
      }
    }

    .product__selectors {
      .list {
        /* outline: 2px solid purple; */
        margin: 30px 0;

        .list__header {
          height: 70px;
          
          .list__header__background {
            background: var(--grey);
            position: absolute;
            left: 0;
            padding: 0 25px;
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .header {
              font-size: 17px;
              font-weight: 400;
            }
            
            .list__header__background__contents {
              width: 100%;
              display: flex;
              justify-content: space-between;
              margin-bottom: 2px;

              p {
                font-size: 17px;
                font-weight: 400;
              }
              
              span {
                font-size: 10px;
                font-weight: 500;
                padding: 5px 7px;
                border-radius: 6px;
                background: rgb(50, 50, 50);
                color: white;
                text-transform: uppercase;
              }
            }

            p {
              font-size: 15px;
              font-weight: 300;
  
              b {
                font-weight: 400;
              }
            }
          }
        }

        .list__wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;

          .list__item {
            border-bottom: 1px solid var(--grey);
            width: 100%;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 0;

            .list__item__title {
              p {
                color: var(--svg);
                font-size: 14px;
                font-weight: 300;
              }

              p:nth-of-type(2) {
                margin-top: 5px;
                font-weight: 400;
              }
            }

            .list__item__input__label {
              border: 1px solid rgb(160, 160, 160);
              border-radius: 6px;
              padding: 2px 6px;
              margin-left: auto;
              margin-right: 5px;
              display: none;

              p {
                color: rgb(160, 160, 160);
                font-size: 12px;
                font-weight: 300;
                text-transform: uppercase;
              }
            }

            .list__item__input__label.active {
              display: block;
            }

            .list__item__input {


              button {
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: transparent;
                
                svg {
                  font-size: 16px;
                  color: var(--svg);
                }
              }
            }
          }
        }
      }
/* 
      .product__selectors__remove_list {

      }

      .product__selectors__mandatory_list {

      }

      .product__selectors__additional_list {

      } */
    }
  }

  .product_detail__add_to_cart {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    
    .add_to_cart__contents {
      padding: 25px;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--background);
      
      .add_to_cart__price {
        h2 {
          font-size: 20px;
          font-weight: 500;
        }
      }
  
      .add_to_cart__cta { 
        button {
          background: black;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 400;
          color: white;
          padding: 10px 14px;
        }
      }
    }
  }
`