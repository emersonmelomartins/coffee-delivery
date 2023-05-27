import styled from "styled-components";

export const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button,
  input {
    border: none;
    background-color: ${props => props.theme["base-button"]};
    margin: 0;
    height: 2rem;
    width: 2rem;
    text-align: center;
    font-size: 1rem;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme["base-title"]};
  }

  button {
    svg {
      color: ${props => props.theme.purple};
    }

    &:hover {
      background-color: ${props => props.theme["base-hover"]};
    }

    &.minus-button {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &.plus-button {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  display: flex;
`;
