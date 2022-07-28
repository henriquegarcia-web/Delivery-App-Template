import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const OrderResultsContainer = styled(PageContainer)`
  padding: 5px 25px;
  flex-direction: column;

  .order_result__header {
    background: var(--background);
    position: fixed;
    width: 100%;
    height: fit-content;
    left: 0;
    top: 0;
    padding: 5px 25px;
  }

  .order_result__contents {
    margin-top: 80px;
    padding-bottom: 120px;

    .order_result__contents__success {
      display: none;
      flex-direction: column;

      &.active {
        display: flex;
      }

      .order_result__success__image {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
          width: 80%;
        }
      }

      .order_result__success__message {
        padding: 0 30px;
        margin-bottom: 60px;

        p {
          text-align: center;
          font-size: 18px;
          font-weight: 400;
        }

        p:nth-of-type(2) {
          margin-top: 8px;
          font-size: 17px;
          font-weight: 300;
        }
      }

      .order_result__success__ctas {
        display: flex;
        flex-direction: column;

        a {
          margin: 0 auto 10px auto;
        }

        a:nth-of-type(1) {
          button {
            background: black;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 400;
            color: white;
            padding: 10px 14px;
            width: fit-content;
          }
        }

        a:nth-of-type(2) {
          button {
            background: transparent;
            padding: 8px 0;
            font-size: 15px;
            font-weight: 400;
          }
        }
      }
    }

    .order_result__contents__error {
      display: none;
      display: none;
      flex-direction: column;
      
      &.active {
        display: flex;
      }

      .order_result__error__image {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        padding: 15px 0;

        img {
          width: 90%;
        }
      }

      .order_result__error__message {
        padding: 0 30px;
        margin-bottom: 60px;

        p {
          text-align: center;
          font-size: 18px;
          font-weight: 400;
        }

        p:nth-of-type(2) {
          margin-top: 8px;
          font-size: 17px;
          font-weight: 300;
        }
      }

      .order_result__error__ctas {
        display: flex;
        flex-direction: column;

        a {
          margin: 0 auto 10px auto;

          button {
            background: black;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 400;
            color: white;
            padding: 10px 14px;
            width: fit-content;
          }
        }
      }
    }
  }
`