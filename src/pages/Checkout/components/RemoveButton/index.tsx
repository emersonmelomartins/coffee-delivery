import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { RemoveButtonContainer } from "./styles";

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function RemoveButton(props: RemoveButtonProps) {
  return (
    <RemoveButtonContainer type="button" {...props}>
      <Trash size={16} />
      Remover
    </RemoveButtonContainer>
  );
}
