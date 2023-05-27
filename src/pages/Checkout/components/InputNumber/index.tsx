import { Minus, Plus } from "phosphor-react";
import { InputButtonContainer } from "./styles";

interface InputNumberProps {
  onClickIncrement: () => void;
  onClickDecrement: () => void;
  value: number;
}

export function InputNumber({
  onClickIncrement,
  onClickDecrement,
  value,
}: InputNumberProps) {
  function handleIncrement() {
    onClickIncrement();
  }
  function handleDecrement() {
    onClickDecrement();
  }
  return (
    <InputButtonContainer>
      <button type="button" className="minus-button" onClick={handleDecrement}>
        <Minus />
      </button>
      <input type="text" readOnly value={value} />
      <button type="button" className="plus-button" onClick={handleIncrement}>
        <Plus />
      </button>
    </InputButtonContainer>
  );
}
