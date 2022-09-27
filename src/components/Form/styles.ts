import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  padding: 0.75rem;
  outline: 0;
  border-radius: 4px;

  border: 1px solid ${props => props.theme["base-button"]};

  &:focus-within {
    border: 1px solid ${props => props.theme["yellow-dark"]};
  }
`;

interface InputWithStylesProps {
  $isRequired?: boolean;
}

export const InputWithStyles = styled.input<InputWithStylesProps>`
  border: none;
  outline: none;
  background: none;
  padding-right: ${props => (props.$isRequired ? "0px" : "3.2rem")};
`;

export const AdditionalInputInfo = styled.label`
  position: absolute;
  width: 3.125rem;
  right: 12px;
  bottom: 14px;

  font-size: 0.75rem;
  font-style: italic;
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme["base-label"]};

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
