import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  .menu-actions {
    display: flex;
    gap: 0.75rem;

    .menu-location,
    button {
      padding: 0.5rem;
      border-radius: 6px;
    }

    .menu-location {
      color: ${props => props.theme["purple-dark"]};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: ${props => props.theme["purple-light"]};
    }

    button {
      background: ${props => props.theme["yellow-light"]};
      border: 0;
      font-size: 0;
      position: relative;
    }
  }
`;

interface CartLengthProps {
  $show: boolean;
}

export const CartLength = styled.span<CartLengthProps>`
  background: ${props => props.theme["yellow-dark"]};
  position: absolute;
  color: ${props => props.theme.white};
  font-size: 0.875rem;
  top: -10px;
  right: -10px;
  width: 1.25rem;
  height: 1.25rem;

  display: ${props => (props.$show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
