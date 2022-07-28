import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const PaymentContainer = styled(PageContainer)`
  padding: 5px 25px;
  flex-direction: column;

  .payment__header {
    background: var(--background);
    position: fixed;
    width: 100%;
    height: fit-content;
    left: 0;
    top: 0;
    padding: 5px 25px;
  }

  .payment__settings {
    margin-top: 80px;
    padding-bottom: 120px;

    .payment__section {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;

      .payment__section__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        h2 {
          font-size: 18px;
          font-weight: 400;
        }

        button {
          font-size: 15px;
          font-weight: 300;
          background: transparent;
        }
      }
    }

    // Endereço
    .payment__section__address {
      width: 100%;
      padding: 0 5px;

      .address__selected {
        width: 100%;
        display: flex;
        padding: 10px;
        border-radius: 6px;
        box-shadow: 0 0 20px rgb(230, 230, 230);

        .address__selected__image {
          width: 80px;
          height: 70px;
          border-radius: 6px;
          overflow: hidden;
          margin-right: 15px;

          img {
            width: 100%;
            height: 100%;
            object-fit: content;
          }
        }

        .address__selected__infos {
          width: calc(100% - 95px);

          h2 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 3px;
          }

          p {
            font-size: 15px;
            font-weight: 300;
            color: var(--svg);
          }
        }
      }

      .address__form {
        display: none;
      }
    }

    // Forma de Pagamento
    .payment__section__payment_way {


      .payment_way__form {
        display: flex;
        flex-direction: column;
        padding: 0 5px;

        .payment_way__form__item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;

          input {
            margin-right: 8px;
            width: 18px;
            height: 18px;
          }

          p {
            font-size: 16px;
            font-weight: 300;
          }
        }
      }
    }
  }

  .payment__send_order {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    .payment__send_order__main {
      position: relative;
      padding: 5px 25px 25px 25px;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--background);
      z-index: 12;

      .payment__send_order__cta {
        width: 100%;
        
        button {
          background: black;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 400;
          color: white;
          padding: 10px 14px;
          width: 100%;
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

    .payment__send_order__details {
      border-radius: 10px;
      background: var(--background);
      box-shadow: 0 0 25px 40px rgb(244, 244, 244);
      position: absolute;
      width: 100%;
      top: 0;
      transform: translateY(-40px);
      z-index: 10;
      transition: .2s;

      &.active {
        transform: translateY(-100%);
      }

      .payment__send_order__content {
        display: flex;
        flex-direction: column;

        .send_order__details {
          display: flex;
          flex-direction: column;
          padding: 0 25px;
          margin-bottom: 10px;

          .send_order__details__item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            color: var(--svg);

            p {
              font-size: 15px;
              font-weight: 400;
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
        }
      }
    }
  }
`