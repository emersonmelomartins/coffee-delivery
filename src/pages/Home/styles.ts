import styled from "styled-components";

export const HomeContainer = styled.main`
  .introduction {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .introduction-info {
      h1 {
        font-size: 3rem;
        line-height: 1.3;
        max-width: 35rem;
      }

      p {
        font-size: 1.25rem;
        line-height: 1.3;
        max-width: 35rem;
      }

      .introduction-info-items {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 100%;
          flex: calc(40% - 0.5rem);
          margin: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: start;

          .item-icon {
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            &.dark-yellow {
              background: ${props => props.theme["yellow-dark"]};
            }
            &.yellow {
              background: ${props => props.theme.yellow};
            }
            &.base-text {
              background: ${props => props.theme["base-text"]};
            }
            &.purple {
              background: ${props => props.theme.purple};
            }
          }
        }
      }
    }
  }
`;
