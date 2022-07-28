import styled from "styled-components"

import {
  PageContainer
} from '../../globalStyles'

export const HomeContainer = styled(PageContainer)`
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9)), url(${props => props.bgImage});
  background-position: center;
  background-size: cover;

  .home {
    flex-direction: column;
    justify-content: space-between;

    .home__logo {
      color: white;
      width: 100%;
      text-align: center;
      margin-top: 100px;

      h1 {
        font-size: 46px;
        font-weight: 700;
        letter-spacing: 2px;
      }

      h2 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 4px;
      }
    }

    .home__main {
      margin-bottom: 40px;

      h2 {
        color: white;
        font-size: 38px;
        font-weight: 800;
        margin-bottom: 25px;
      }

      button {
        background: var(--orange);
        color: white;
        width: 100%;
        padding: 12px 0;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1px;
        border-radius: 10px;
        margin-bottom: 15px;
      }

      .home__main__signup {
        color: white;
        display: flex;
        justify-content: center;

        p {
          font-size: 15px;
          font-weight: 400;
        }

        a {
          color: var(--orange);
        }

        b {
          margin-left: 6px;
        }
      }
    }
  }
`