import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import {
  AddressContent,
  CheckoutForm,
  CoffeeContainer,
  OrderContainer,
  PaymentContent,
  SelectedCoffeeContent,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutForm>
      <OrderContainer>
        <strong>Complete seu pedido</strong>

        <AddressContent>
          <MapPin color={defaultTheme["yellow-dark"]} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <div className="form-item">
            <input
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
              aria-label="cep"
            />
          </div>

          <div className="form-item">
            <input
              id="rua"
              name="rua"
              type="text"
              placeholder="Rua"
              aria-label="rua"
            />
          </div>

          <div className="form-item">
            <input
              id="numero"
              name="numero"
              type="text"
              placeholder="Número"
              aria-label="numero"
            />
            <input
              id="complemento"
              name="complemento"
              type="text"
              placeholder="Complemento"
              aria-label="complemento"
            />
          </div>

          <div className="form-item">
            <input
              id="bairro"
              name="bairro"
              type="text"
              placeholder="Bairro"
              aria-label="bairro"
            />
            <input
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              aria-label="cidade"
            />
            <input
              id="uf"
              name="uf"
              type="text"
              placeholder="UF"
              aria-label="uf"
            />
          </div>
        </AddressContent>

        <PaymentContent>
          <CurrencyDollar color={defaultTheme.purple} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div>
            <button type="button">
              <CreditCard />
              Cartão de Crédito
            </button>
            <button type="button">
              <Bank />
              Cartão de Débito
            </button>
            <button type="button">
              <Money />
              Dinheiro
            </button>
          </div>
        </PaymentContent>
      </OrderContainer>

      <CoffeeContainer>
        <strong>Cafés selecionados</strong>
        <SelectedCoffeeContent>
          <p>Lista de cafés selecionados </p>

          <p>Total </p>

          <button type="submit">Confirmar Pedido</button>
        </SelectedCoffeeContent>
      </CoffeeContainer>
    </CheckoutForm>
  );
}
