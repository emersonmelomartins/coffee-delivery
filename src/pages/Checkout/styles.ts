import styled from "styled-components";

export const CheckoutForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;

  .card-title {
    display: block;
    margin-bottom: 1rem;
    font-family: "Baloo 2";
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }
`;

export const OrderContainer = styled.div`
  width: 60%;

  .card-description {
    display: flex;
    align-items: flex-start;

    div {
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;

      span {
        color: ${props => props.theme["base-subtitle"]};
        line-height: 1.3;
      }

      p {
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
      }
    }
  }
`;

export const AddressContent = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};

  div.form-item {
    display: flex;
    gap: 1rem;
    margin-top: 0.75rem;

    input {
      width: 100%;
    }
  }
`;

export const PaymentContent = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PaymentRadioSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25rem;
  width: 100%;

  input[type="radio"] {
    visibility: hidden;
    height: 0;
    width: 0;
    padding: 0;
    margin: 0;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    gap: 0.75rem;
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    padding: 1rem;
    border-radius: 6px;

    svg {
      color: ${props => props.theme.purple};
    }

    &:hover {
      background-color: ${props => props.theme["base-hover"]};
      cursor: pointer;
    }
  }

  input[type="radio"]:checked + label {
    background-color: ${props => props.theme["purple-light"]};
    border: 1px solid ${props => props.theme.purple};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CoffeeContainer = styled.div`
  width: 40%;

  strong {
    font-family: "Baloo 2";
    font-size: 18;
  }
`;

export const SelectedCoffeeContent = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme["base-card"]};

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const SelectedCoffeeList = styled.ul`
  .coffee-item {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};

    img {
      width: 4rem;
      height: 4rem;
    }

    .coffee-item__details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
      color: ${props => props.theme["base-subtitle"]};
      font-family: "Roboto";

      .coffee-buttons {
        display: flex;
        gap: 0.5rem;
      }
    }

    .coffee-price {
      display: flex;
      align-self: flex-start;
      strong {
        font-family: "Roboto";
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};
      }
    }
  }
`;

export const CoffeeTotal = styled.div`
  padding: 1.5rem 0;

  .price-itens,
  .price-delivery,
  .price-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    color: ${props => props.theme["base-text"]};

    span:first-child {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
      color: ${props => props.theme["base-subtitle"]};
    }
  }
`;
