import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const UserSavesContainer = styled(PageContainer)`
  padding: 5px 25px;
  flex-direction: column;

  .user_saves__header {
    background: var(--background);
    position: fixed;
    width: 100%;
    height: fit-content;
    left: 0;
    top: 0;
    padding: 5px 25px;
  }

  .user_saves__contents {
    margin-top: 80px;
    padding-bottom: 120px;

    .user_saves__item {
      display: flex;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 6px;
      box-shadow: 0 0 20px rgb(230, 230, 230);

      .user_saves__item__image {
        width: 80px;
        border-radius: 6px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user_saves__item__infos {
        width: calc(100% - 130px);
        margin: 0 10px;

        h1 {
          font-size: 18px;
          font-weight: 400;
        }

        h2 {
          font-size: 15px;
          font-weight: 300;
          margin-bottom: 5px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
        }
      }

      .user_saves__item__cta {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 20px;
          color: var(--svg);
        }
      }
    }
  }
`