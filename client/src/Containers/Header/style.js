import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;

  .header__wrapper {
    /* border: 2px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .header__item {
    background: var(--grey);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;

    svg {
      color: rgba(0, 0, 0, 0.8);
      font-size: 22px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .header__title {
    h2 {
      font-size: 20px;
      font-weight: 300;
    }
  }
`

export const MenuMobileContainer = styled.div`
  background: white;

  .menu__icon {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: var(--grey);
    z-index: 10;
    color: var(--svg);

    svg {
      font-size: 22px;
    }

    &.active {
      background: rgb(16, 16, 16);
      color: white;
    }
  }

  .menu__contents {
    position: absolute;
    background: rgb(20, 20, 20);
    width: 60%;
    height: 100vh;
    left: -100%;
    top: 0;
    z-index: 1;
    padding: 90px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    transition: .3s;

    .menu__contents__header {
      color: white;
      margin-bottom: 30px;

      h2 {
        font-size: 16px;
        font-weight: 300;

        b {
          font-weight: 600;
          color: var(--orange);
        }
      }
    }

    .menu__contents__functionalities {
      color: white;
      margin-bottom: 60px;

      h3 {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 14px;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;

        li {
          width: 100%;
          height: 35px;
          display: flex;
          align-items: center;
          padding-left: 10px;
          border-radius: 10px;
          transition: .2s;

          a {
            color: white;
            font-size: 15px;
            font-weight: 400;
          }

          svg {
            font-size: 16px;
            margin-right: 8px;
          }

          &:active {
            background: rgb(17, 17, 17);
          }
        }
      }
    }

    button {
      width: 100%;
      padding: 8px 0;
      font-size: 16px;
      font-weight: 300;
      border-radius: 10px;
      margin-top: auto;
    }

    &.active {
      left: 0;
    }
  }

  .background__locker {
    position: absolute;
    display: none;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;

    &.active {
      display: block;
    }
  }
`