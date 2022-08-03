import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import heroPng from "../../assets/hero.png";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <section className="introduction">
        <div className="introduction-info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul className="introduction-info-items">
            <li>
              <span className="item-icon dark-yellow">
                <ShoppingCart color={defaultTheme.white} weight="fill" />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span className="item-icon base-text">
                <Package color={defaultTheme.white} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span className="item-icon yellow">
                <Timer color={defaultTheme.white} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span className="item-icon purple">
                <Coffee color={defaultTheme.white} weight="fill" />
              </span>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <div className="hero">
          <img src={heroPng} alt="Foto de copo de café com grãos no fundo" />
        </div>
      </section>
    </HomeContainer>
  );
}
