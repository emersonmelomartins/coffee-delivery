import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  border: none;
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  font-size: 0.875rem;

  &:hover {
    background: ${props => props.theme["yellow-dark"]};
  }
`;
