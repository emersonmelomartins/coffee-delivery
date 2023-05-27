import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";

import { defaultTheme } from "../../../../styles/themes/defaultTheme";

import { CoffeeCardContainer, Tag } from "./styles";

interface CoffeeItem {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  imageUrl: string;
}

interface CoffeeCardProps {
  coffeeItem: CoffeeItem;
  // eslint-disable-next-line no-unused-vars
  onClickAddToCart: (coffee: CoffeeItem, amount: number) => void;
}

export function CoffeeCard({ coffeeItem, onClickAddToCart }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1);

  function handleAddToCart(coffee: CoffeeItem) {
    onClickAddToCart(coffee, amount);
  }

  function handleIncrementAmount() {
    if (amount < 99) {
      setAmount(state => state + 1);
    }
  }

  function handleDecrementAmount() {
    if (amount > 1) {
      setAmount(state => state - 1);
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={coffeeItem.imageUrl} alt="Coffee" />

      <div className="tag-list">
        {coffeeItem.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="card-description">
        <strong>{coffeeItem.title}</strong>
        <p>{coffeeItem.description}</p>
      </div>

      <div className="card-footer">
        <div className="price">
          <span>R$</span>
          <strong>{coffeeItem.price.toLocaleString().padEnd(4, "0")}</strong>
        </div>

        <div className="amount-buttons">
          <div className="amount-control">
            <button type="button" onClick={handleDecrementAmount}>
              <Minus color={defaultTheme.purple} weight="bold" />
            </button>
            <input type="text" value={amount} readOnly />
            <button type="button" onClick={handleIncrementAmount}>
              <Plus color={defaultTheme.purple} weight="bold" />
            </button>
          </div>

          <button
            type="button"
            className="btn-cart"
            onClick={() => handleAddToCart(coffeeItem)}
          >
            <ShoppingCartSimple
              color={defaultTheme.white}
              weight="fill"
              size={20}
            />
          </button>
        </div>
      </div>
    </CoffeeCardContainer>
  );
}
