import { Minus, Plus } from "phosphor-react";
import { InputButtonContainer } from "./styles";

export function InputNumber() {
  return (
    <InputButtonContainer>
      <button type="button" className="minus-button">
        <Minus />
      </button>
      <button type="button">0</button>
      <button type="button" className="plus-button">
        <Plus />
      </button>
    </InputButtonContainer>
  );
}
