import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import coffee from "../../assets/cafe-expresso-tradicional.png";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import { CoffeeCardContainer, Tag } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffee} alt="" />

      <div className="tag-list">
        <Tag>Tradicional</Tag>
      </div>

      <div className="card-description">
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <div className="card-footer">
        <div className="price">
          <span>R$</span>
          <strong>9,90</strong>
        </div>

        <div className="amount-buttons">
          <div className="amount-control">
            <button type="button">
              <Minus color={defaultTheme.purple} weight="bold" />
            </button>
            <input type="text" value="99" readOnly />
            <button type="button">
              <Plus color={defaultTheme.purple} weight="bold" />
            </button>
          </div>

          <button type="button" className="btn-cart">
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
