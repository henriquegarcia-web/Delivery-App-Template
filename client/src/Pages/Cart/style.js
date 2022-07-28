import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const CartContainer = styled(PageContainer)`
  padding: 5px 25px;
  flex-direction: column;

  .cart__header {
    background: var(--background);
    position: fixed;
    width: 100%;
    height: fit-content;
    left: 0;
    top: 0;
    padding: 5px 25px;
  }

  .cart__list {
    margin-top: 80px;
    padding-bottom: 120px;

    .cart__list__item {
      width: 100%;
      display: flex;
      padding: 10px 0;
      margin-bottom: 10px;

      .cart__item__remove_button {
        width: 40px;
        padding-left: 5px;
        display: flex;
        align-items: center;

        input {
          width: 20px;
          height: 20px;
        }
      }

      .cart__item__image {
        width: 85px;
        height: 75px;
        border-radius: 6px;
        overflow: hidden;
        background: var(--grey);
        margin-right: 15px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .cart__item__container {
        width: calc(100% - 150px);
        display: flex;
        flex-direction: column;

        .cart__item__infos {
          display: flex;
          justify-content: space-between;
          height: 100%;

          h1 {
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 2px;
          }

        }
        
        .cart__item__counter {
          width: auto;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 16px;
            font-weight: 400;
          }
        }
      }
    }
  }

  .cart__payment {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    .cart__payment__main {
      position: relative;
      padding: 5px 25px 25px 25px;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--background);
      z-index: 12;

      .cart__payment__price {
        p {
          font-size: 20px;
          font-weight: 500;
        }
      }

      .cart__payment__cta {
        button {
          background: black;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 400;
          color: white;
          padding: 10px 14px;
          max-width: 200px;
        }
      }
    }

    .cart__payment__details {
      border-radius: 10px;
      background: var(--background);
      box-shadow: none;
      position: absolute;
      width: 100%;
      top: 0;
      transform: translateY(-100%);
      z-index: 10;

      .payment__details__full {
        box-shadow: 0 0 25px 40px rgb(244, 244, 244);
        bottom: 0;
        transform: translateY(100%);
        position: absolute;
        width: 100%;
        transition: .2s;
        margin-bottom: 40px;
        z-index: 8;

        &.active {
          flex-direction: column;
          transform: translateY(0);
        }

        .payment__details__full__content {
          display: flex;
          flex-direction: column;

          .payment__details__discount {
            position: relative;
            margin: 15px 0 30px 0;
            padding: 0 25px;
            display: flex;
            align-items: center;

            input {
              border: 2px solid var(--orange);
              color: var(--orange);
              border-radius: 6px;
              font-size: 16px;
              font-weight: 300;
              padding: 10px 16px;
              width: 100%;
            }

            svg {
              position: absolute;
              right: 40px;
              font-size: 20px;
              color: var(--orange);
            }
          }

          .payment__details {
            display: flex;
            flex-direction: column;
            padding: 0 25px;
            margin-bottom: 30px;

            .payment__details__item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              color: var(--svg);

              p {
                font-size: 15px;
                font-weight: 300;
              }

              h2 {
                font-size: 15px;
                font-weight: 400;

                b {
                  color: var(--orange);
                  font-weight: 500;
                }
              }
            }

            .payment__details__item:last-of-type {
              padding-top: 20px;
              margin-top: 10px;
              border-top: 1px solid var(--svg);

              p {
                font-weight: 400;
              }
            }
          }
        }
      }

      .minimized__container {
        padding: 20px 0;
        display: flex;
        justify-content: center;
        width: 100%;

        .minimized__symbol {
          width: 40px;
          border: 2px solid rgb(190, 190, 190);
        }
      }
    }
  }
`

export const CounterContainer = styled.div`
  display: flex;

  .counter__input {

    button {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background: rgb(240, 240, 240);
      transition: .2s;

      svg {
        font-size: 14px;
      }

      &:active {
        background: rgb(225, 225, 225);
      }
    }
  }

  .counter__text {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: 400;
    }
  }
`