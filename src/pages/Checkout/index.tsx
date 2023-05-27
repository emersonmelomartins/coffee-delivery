/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "../../components/Form/Input";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import {
  AddressContent,
  CheckoutForm,
  CoffeeContainer,
  CoffeeTotal,
  OrderContainer,
  PaymentContent,
  PaymentRadioSelection,
  SelectedCoffeeContent,
  SelectedCoffeeList,
} from "./styles";

import imagePng from "../../assets/cafe-arabe.png";
import { Button } from "../../components/Button";
import { InputNumber } from "./components/InputNumber";
import { RemoveButton } from "./components/RemoveButton";

enum PaymentType {
  CreditCard = 0,
  DebitCard = 1,
  Money = 3,
}

export function CheckoutPage() {
  const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>(
    PaymentType.CreditCard
  );

  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  return (
    <CheckoutForm>
      <OrderContainer>
        <strong className="card-title">Complete seu pedido</strong>

        <AddressContent>
          <div className="card-description">
            <MapPin color={defaultTheme["yellow-dark"]} size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="form-item">
            <Input
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
              aria-label="cep"
              required
            />
          </div>

          <div className="form-item">
            <Input
              id="rua"
              name="rua"
              type="text"
              placeholder="Rua"
              aria-label="rua"
              required
            />
          </div>

          <div className="form-item">
            <Input
              id="numero"
              name="numero"
              type="text"
              placeholder="Número"
              aria-label="numero"
              required
            />
            <Input
              id="complemento"
              name="complemento"
              type="text"
              placeholder="Complemento"
              aria-label="complemento"
            />
          </div>

          <div className="form-item">
            <Input
              id="bairro"
              name="bairro"
              type="text"
              placeholder="Bairro"
              aria-label="bairro"
              required
            />
            <Input
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              aria-label="cidade"
              required
            />
            <Input
              id="uf"
              name="uf"
              type="text"
              placeholder="UF"
              aria-label="uf"
              required
            />
          </div>
        </AddressContent>

        <PaymentContent>
          <div className="card-description">
            <CurrencyDollar color={defaultTheme.purple} size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <PaymentRadioSelection>
            <input
              type="radio"
              name="payment_type"
              id={String(PaymentType.CreditCard)}
              value={PaymentType.CreditCard}
              defaultChecked={selectedPaymentType === PaymentType.CreditCard}
              onClick={() => setSelectedPaymentType(PaymentType.CreditCard)}
            />
            <label htmlFor={String(PaymentType.CreditCard)}>
              <CreditCard />
              Cartão de Crédito
            </label>

            <input
              type="radio"
              name="payment_type"
              id={String(PaymentType.DebitCard)}
              value={PaymentType.DebitCard}
              defaultChecked={selectedPaymentType === PaymentType.DebitCard}
              onClick={() => setSelectedPaymentType(PaymentType.DebitCard)}
            />
            <label htmlFor={String(PaymentType.DebitCard)}>
              <Bank />
              Cartão de Débito
            </label>

            <input
              type="radio"
              name="payment_type"
              id={String(PaymentType.Money)}
              value={PaymentType.Money}
              defaultChecked={selectedPaymentType === PaymentType.Money}
              onClick={() => setSelectedPaymentType(PaymentType.Money)}
            />
            <label htmlFor={String(PaymentType.Money)}>
              <Money />
              Dinheiro
            </label>
          </PaymentRadioSelection>
        </PaymentContent>
      </OrderContainer>

      <CoffeeContainer>
        <strong className="card-title">Cafés selecionados</strong>
        <SelectedCoffeeContent>
          <SelectedCoffeeList>
            <li className="coffee-item">
              <img src={imagePng} alt="" className="coffee-item__thumbnail" />

              <div className="coffee-item__details">
                <span>Expresso Tradicional</span>

                <div className="coffee-buttons">
                  <InputNumber
                    value={coffeeQuantity}
                    onClickIncrement={() =>
                      setCoffeeQuantity(coffeeQuantity + 1)
                    }
                    onClickDecrement={() =>
                      setCoffeeQuantity(coffeeQuantity - 1)
                    }
                  />
                  <RemoveButton onClick={() => alert("Removido")} />
                </div>
              </div>

              <div className="coffee-price">
                <strong>R$ 9,90</strong>
              </div>
            </li>

            <li className="coffee-item">
              <img src={imagePng} alt="" className="coffee-item__thumbnail" />

              <div className="coffee-item__details">
                <span>Expresso Tradicional</span>

                <div className="coffee-buttons">
                  <InputNumber
                    value={coffeeQuantity}
                    onClickIncrement={() =>
                      setCoffeeQuantity(coffeeQuantity + 1)
                    }
                    onClickDecrement={() =>
                      setCoffeeQuantity(coffeeQuantity - 1)
                    }
                  />
                  <RemoveButton onClick={() => alert("Removido")} />
                </div>
              </div>

              <div className="coffee-price">
                <strong>R$ 9,90</strong>
              </div>
            </li>
          </SelectedCoffeeList>

          <CoffeeTotal>
            <div className="price-itens">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="price-delivery">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="price-total">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </CoffeeTotal>

          <NavLink to="/success">
            <Button type="button">Confirmar Pedido</Button>
          </NavLink>
        </SelectedCoffeeContent>
      </CoffeeContainer>
    </CheckoutForm>
  );
}
