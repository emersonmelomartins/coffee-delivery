import { InputHTMLAttributes } from "react";
import { AdditionalInputInfo, InputContainer, InputWithStyles } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <InputContainer>
      <InputWithStyles $isRequired={props.required} {...props} />
      {!props.required && (
        <AdditionalInputInfo htmlFor={props.name}>Opcional</AdditionalInputInfo>
      )}
    </InputContainer>
  );
}
