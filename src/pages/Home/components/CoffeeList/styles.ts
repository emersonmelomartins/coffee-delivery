import styled from "styled-components";

export const CoffeeListContainer = styled.section`
  max-width: 75rem;
  width: 100%;
  padding: 2rem 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    font-family: "Baloo 2";
    color: ${props => props.theme["base-subtitle"]};
  }

  div.coffee-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: left;
  }
`;
