import styled from "styled-components"

export const ShowcaseContainer = styled.div`
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 80px;
  }

  .showcase__header {
    margin-bottom: 5px;

    h2 {
      font-size: 20px;
      font-weight: 400;
    }
  }

  .showcase__carousel {
    display: flex;
    overflow: auto;

    .showcase__carousel__wrapper {
      padding: 10px;
      left: 0;
      display: flex;

      .showcase__item {
        width: 160px;
        height: fit-content;
        border-radius: 10px;
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
        margin-right: 20px;
        padding: 20px;
        text-align: center;

        .showcase__item__image {
          width: 100%;
          height: 110px;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 10px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .showcase__item__title {
          margin-bottom: 5px;

          h2 {
            font-size: 15px;
            font-weight: 400;
          }
        }

        .showcase__item__price {


          h3 {
            font-size: 15px;
            font-weight: 500;
          }
        }
      }
    }
  }
`