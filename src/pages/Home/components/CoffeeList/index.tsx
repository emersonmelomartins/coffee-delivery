import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

import { data as MOCKDATA } from "../../../../../data";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <div className="coffee-list">
        {MOCKDATA.map(coffee => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            description={coffee.description}
            price={coffee.price}
            imageUrl={coffee.imageUrl}
            tags={coffee.tags}
          />
        ))}
      </div>
    </CoffeeListContainer>
  );
}
