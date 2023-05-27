import { ReactNode } from "react";
import { BgColorType, IconContent, InfoTextContainer } from "./styles";

interface InfoTextProps {
  icon: ReactNode;
  iconBackground: BgColorType;
  children: ReactNode;
}
export function InfoText({ icon, children, iconBackground }: InfoTextProps) {
  return (
    <InfoTextContainer>
      <IconContent $bgColor={iconBackground}>{icon}</IconContent>
      <div>{children}</div>
    </InfoTextContainer>
  );
}
