import styled from "styled-components"

export const NavigationContainer = styled.div`


  .navigation__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 25px 70px;

    .navigation__item {
      svg {
        font-size: 22px;
        color: rgba(0, 0, 0, 0.4);
      }
    }

    .navigation__item.active {
      svg {
        color: var(--svg);
      }
    }
  }
`