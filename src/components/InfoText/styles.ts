import styled from "styled-components";

export const InfoTextContainer = styled.div`
  width: 100%;
  flex: calc(40% - 0.5rem);
  margin: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: ${props => props.theme["base-text"]};

    p,
    strong {
      margin: 0px !important;
      line-height: 1.3 !important;
      font-size: 1rem !important;
    }
  }
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
