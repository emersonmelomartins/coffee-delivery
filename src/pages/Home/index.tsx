import { CoffeeList } from "./components/CoffeeList";
import { Introduction } from "./components/Introduction";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Introduction />
      <CoffeeList />
    </HomeContainer>
  );
}
