import styled from "styled-components";

export const IntroductionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  img.introduction-background {
    width: 100%;
    margin: 0 auto;
    position: absolute;
  }

  .introduction-content {
    max-width: 75rem;
    padding: 2rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .introduction-info {
      h1 {
        font-size: 3rem;
        line-height: 1.3;
        max-width: 37.5rem;
        font-weight: 800;
        color: ${props => props.theme["base-title"]};
      }

      p {
        margin-top: 1rem;
        font-size: 1.25rem;
        line-height: 1.3;
        max-width: 37.5rem;
      }

      .introduction-info-items {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;
