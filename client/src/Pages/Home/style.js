import styled from "styled-components"

export const HomeContainer = styled.div`
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9)), url(${props => props.bgImage});
  background-position: center;
  background-size: cover;

  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;

  .home__content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    .home__content__logo {
      color: white;
      /* outline: 1px solid orange; */
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

    .home__content__main {
      /* outline: 1px solid orange; */

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

      .content__main__signup {
        color: white;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;

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