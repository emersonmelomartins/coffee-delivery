import styled from "styled-components";

export const CheckoutForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  gap: 1rem;
  max-width: 75rem;
  margin: 0 auto;
`;

export const OrderContainer = styled.div`
  width: 50%;
  strong {
    font-family: "Baloo 2";
    font-size: 18;
  }
`;
export const AddressContent = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme["base-card"]};

  div {
    display: inline;
  }

  div.form-item {
    display: flex;
    gap: 1rem;
    margin-top: 0.75rem;

    input {
      width: 100%;
    }
  }
`;
export const PaymentContent = styled.div``;

export const CoffeeContainer = styled.div`
  width: 50%;

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
