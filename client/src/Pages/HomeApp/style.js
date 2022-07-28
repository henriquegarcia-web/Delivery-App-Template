import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const HomeAppContainer = styled(PageContainer)`
  .home_app {
    flex-direction: column;

    .home_app__main_content {
      margin: 80px 0 30px 0;

      h2 {
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 20px;

        b {
          font-weight: 500;
          color: var(--orange2);
        }
      }

      .main_content__search_box {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        input {
          background: var(--grey);
          width: 100%;
          padding: 12px 16px;
          font-size: 18px;
          font-weight: 200;
          border-radius: 10px;
          color: rgba(0, 0, 0, 0.8);
        }

        svg {
          position: absolute;
          right: 14px;
          font-size: 22px;
          color: rgba(0, 0, 0, 0.8);
        }
      }

      .main_content__categories {
        display: flex;
        overflow: auto;

        .category__container {
          width: fit-content;
          display: flex;
          align-items: center;
          border-radius: 100px;
          padding: 8px 15px;
          border: 1px solid var(--orange2);
          margin-right: 8px;

          img {
            width: 24px;
            margin-right: 8px;
          }

          p {
            color: var(--orange2);
            font-size: 15px;
            font-weight: 400;
          }
        }
      }
    }

    .home_app__hud__header {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      background: var(--background);
      padding: 5px 25px 5px 25px;
      z-index: 20;
    }

    .home_app__hud__navigation {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      background: var(--background);
      z-index: 15;
    }
  }
`