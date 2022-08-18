import styled from "styled-components";

export const InfoTextContainer = styled.div`
  width: 100%;
  flex: calc(40% - 0.5rem);
  margin: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: start;
`;

const bgColors = {
  "dark-yellow": "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const;

export type BgColorType = keyof typeof bgColors;

interface IconContentProps {
  $bgColor: BgColorType;
}

export const IconContent = styled.span<IconContentProps>`
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: ${props => props.theme[bgColors[props.$bgColor]]};
`;
