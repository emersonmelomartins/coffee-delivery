import styled from "styled-components";

export const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background-color: ${props => props.theme["base-button"]};
    margin: 0;
    padding: 0.5rem;
    height: 2rem;
    /* font-size: 1rem; */

    svg {
      color: ${props => props.theme.purple};
    }
  }

  button.minus-button {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    &:hover {
      background-color: ${props => props.theme["base-hover"]};
    }
  }

  button.plus-button {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    &:hover {
      background-color: ${props => props.theme["base-hover"]};
    }
  }

  /* text-transform: uppercase; */

  display: flex;
`;
