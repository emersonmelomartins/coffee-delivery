import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/defaultTheme";

import heroPng from "../../../../assets/hero.png";
import svg from "../../../../assets/introduction-bg.svg";

import { InfoText } from "../../../../components/InfoText";
import { IntroductionContainer } from "./styles";

export function Introduction() {
  return (
    <IntroductionContainer>
      <img
        src={svg}
        alt="Formas assimetricas transparentes com diferentes cores"
        className="introduction-background"
      />
      <div className="introduction-content">
        <div className="introduction-info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="introduction-info-items">
            <InfoText
              iconBackground="dark-yellow"
              icon={<ShoppingCart color={defaultTheme.white} weight="fill" />}
            >
              <p>Compra simples e segura</p>
            </InfoText>
            <InfoText
              iconBackground="gray"
              icon={<Package color={defaultTheme.white} weight="fill" />}
            >
              <p>Entrega rápida e rastreada</p>
            </InfoText>
            <InfoText
              iconBackground="yellow"
              icon={<Timer color={defaultTheme.white} weight="fill" />}
            >
              <p>Embalagem mantém o café intacto</p>
            </InfoText>
            <InfoText
              iconBackground="purple"
              icon={<Coffee color={defaultTheme.white} weight="fill" />}
            >
              <p> O café chega fresquinho até você</p>
            </InfoText>
          </div>
        </div>
        <div className="hero">
          <img src={heroPng} alt="Foto de copo de café com grãos no fundo" />
        </div>
      </div>
    </IntroductionContainer>
  );
}
