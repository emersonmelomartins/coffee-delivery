import { useContext } from "react";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

import { data as MOCKDATA } from "../../../../../data";
import { CartContext } from "../../../../context/CartContext";

interface CoffeeItem {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  imageUrl: string;
}

export function CoffeeList() {
  const { addCoffeeIntoCart } = useContext(CartContext);

  function handleAddCoffeeIntoCart(coffee: CoffeeItem, amount: number) {
    addCoffeeIntoCart(coffee, amount);
    toast.success(
      <span>
        Item adicionado ao carrinho!{"\n"}
        <NavLink to="/checkout">
          <strong>Ir para meu pedido</strong>
        </NavLink>
      </span>
    );
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <div className="coffee-list">
        {MOCKDATA.map(coffee => (
          <CoffeeCard
            key={coffee.id}
            coffeeItem={coffee}
            onClickAddToCart={handleAddCoffeeIntoCart}
          />
        ))}
      </div>
    </CoffeeListContainer>
  );
}
