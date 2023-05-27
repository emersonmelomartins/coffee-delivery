import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;

  header {
    h1 {
      color: ${props => props.theme["yellow-dark"]};
      font-size: 2rem;
      line-height: 1.3;
      font-family: "Baloo 2", sans-serif;
    }
    p {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.2rem;
      line-height: 1.3;
      font-family: "Roboto", sans-serif;
    }
  }

  .order-container {
    display: flex;
    margin: 0 auto;
    width: 100%;
    gap: 2rem;

    .hero,
    .order-details {
      width: 50%;
    }

    .order-details {
      text-align: left;
      border-top-left-radius: 6px;
      border-top-right-radius: 36px;
      border-bottom-left-radius: 36px;
      border-bottom-right-radius: 6px;
      ${props => `
        background: linear-gradient(white, white) padding-box,
        linear-gradient(to right, ${props.theme.yellow}, ${props.theme.purple}) border-box;
      `}
      border: 1px solid transparent;

      display: flex;
      flex-direction: column;
      padding: 2.5rem;
    }
  }
`;
