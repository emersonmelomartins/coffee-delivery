import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import orderConfirmedSvg from "../../assets/pedido-confirmado.svg";
import { InfoText } from "../../components/InfoText";
import { SuccessContainer } from "./styles";

export function SuccessPage() {
  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <div className="order-container">
        <div className="order-details">
          <InfoText
            icon={<MapPin color="white" weight="fill" />}
            iconBackground="purple"
          >
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </InfoText>
          <InfoText
            icon={<Timer color="white" weight="fill" />}
            iconBackground="yellow"
          >
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min</strong>
          </InfoText>
          <InfoText
            icon={<CurrencyDollar color="white" weight="fill" />}
            iconBackground="dark-yellow"
          >
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </InfoText>
        </div>
        <div className="hero">
          <img
            src={orderConfirmedSvg}
            alt="Pessoa em cima de uma moto entregando pedido"
          />
        </div>
      </div>
    </SuccessContainer>
  );
}
