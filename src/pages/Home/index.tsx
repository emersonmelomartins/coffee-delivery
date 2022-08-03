import { ShoppingCart } from "phosphor-react";
import heroPng from "../../assets/hero.png";
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
              <ShoppingCart />
              Compra simples e segura
            </li>
            <li>
              <ShoppingCart />
              Compra simples e segura
            </li>
            <li>
              <ShoppingCart />
              Compra simples e segura
            </li>
            <li>
              <ShoppingCart />
              Compra simples e segura
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
