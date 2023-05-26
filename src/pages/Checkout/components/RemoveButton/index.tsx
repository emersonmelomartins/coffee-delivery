import { Trash } from "phosphor-react";
import { RemoveButtonContainer } from "./styles";

export function RemoveButton() {
  return (
    <RemoveButtonContainer type="button">
      <Trash size={16} />
      Remover
    </RemoveButtonContainer>
  );
}
