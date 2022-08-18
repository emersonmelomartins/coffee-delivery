import { CoffeeCard } from "../../../../components/CoffeeCard";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <div className="coffee-list">
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </CoffeeListContainer>
  );
}
