import { ReactNode } from "react";
import { BgColorType, IconContent, InfoTextContainer } from "./styles";

interface InfoTextProps {
  text: string;
  icon: ReactNode;
  iconBackground: BgColorType;
}
export function InfoText({ icon, text, iconBackground }: InfoTextProps) {
  return (
    <InfoTextContainer>
      <IconContent $bgColor={iconBackground}>{icon}</IconContent>
      {text}
    </InfoTextContainer>
  );
}
