import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  height: 20.5rem;
  max-width: 16.5rem;
  padding: 1.5rem;
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;

  background: ${props => props.theme["base-card"]};

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;

  img {
    margin: 0 auto;
    margin-top: -3.2rem;
  }

  .tag-list {
    display: flex;
    gap: 0.5rem;
  }

  .card-description {
    text-align: center;

    strong {
      font-family: "Baloo 2";
      font-size: 1.25rem;
      color: ${props => props.theme["base-subtitle"]};
      font-weight: bold;
    }

    p {
      margin-top: 0.5rem;
      font-family: "Roboto";
      font-size: 0.875rem;
      color: ${props => props.theme["base-label"]};
      line-height: 1.3;
    }
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: auto;
    gap: 0.5rem;
    width: 100%;

    .price {
      span {
        font-size: 0.875rem;
        font-weight: normal;
        font-family: "Roboto";
        color: ${props => props.theme["base-text"]};
        margin-right: 0.25rem;
      }

      strong {
        font-size: 1.5rem;
        font-weight: 800;
        font-family: "Baloo 2";
        color: ${props => props.theme["base-text"]};
      }
    }

    .amount-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      button {
        width: 38px;
        height: 38px;
        border: none;
        background: none;
      }

      input {
        background: none;
        border: none;
        width: 20px;
        height: 38px;
        text-align: center;
        font-size: 1rem;
        font-family: "Roboto";
      }

      button,
      input {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme["base-button"]};
      }

      .amount-control {
        display: flex;
        align-items: center;
        justify-content: center;

        button:first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        button:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      }

      button.btn-cart {
        background: ${props => props.theme.purple};
        border-radius: 8px;

        &:hover {
          background: ${props => props.theme["purple-dark"]};
        }
      }
    }
  }
`;

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
  font-weight: bold;
  font-size: 0.625rem;
  border-radius: 100px;
  text-transform: uppercase;
`;
