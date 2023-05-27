import styled from "styled-components";

export const RemoveButtonContainer = styled.button`
  border: none;
  background-color: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-text"]};
  border-radius: 6px;
  padding: 0 0.5rem;
  height: 2rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  svg {
    color: ${props => props.theme.purple};
  }

  &:hover {
    background-color: ${props => props.theme["base-hover"]};
  }
`;
