/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

import { Button } from "../../components/Button";
import { CartContext } from "../../context/CartContext";
import { InputNumber } from "./components/InputNumber";
import { RemoveButton } from "./components/RemoveButton";

enum PaymentType {
  CreditCard = 0,
  DebitCard = 1,
  Money = 3,
}

export function CheckoutPage() {
  const navigate = useNavigate();

  const {
    cart,
    removeCoffeeFromCart,
    decrementCartItemAmount,
    incrementCartItemAmount,
  } = useContext(CartContext);

  const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>(
    PaymentType.CreditCard
  );

  const total = cart
    .map(c => c.total)
    .reduce((curr, acc) => {
      const soma = curr + acc;

      return soma;
    }, 0);

  function handleRemoveCoffeeFromCart(id: number) {
    removeCoffeeFromCart(id);
  }

  function handleIncrement(id: number) {
    incrementCartItemAmount(id);
  }

  function handleDecrement(id: number) {
    decrementCartItemAmount(id);
  }

  function handleSubmit() {
    navigate("/success");
  }

  return (
    <CheckoutForm onSubmit={handleSubmit}>
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
          {cart.length > 0 ? (
            <>
              <SelectedCoffeeList>
                {cart.map(cartItem => (
                  <li className="coffee-item" key={cartItem.product.id}>
                    <img
                      src={cartItem.product.imageUrl}
                      className="coffee-item__thumbnail"
                      alt=""
                    />

                    <div className="coffee-item__details">
                      <span>{cartItem.product.title}</span>

                      <div className="coffee-buttons">
                        <InputNumber
                          value={cartItem.amount}
                          onClickIncrement={() =>
                            handleIncrement(cartItem.product.id)
                          }
                          onClickDecrement={() =>
                            handleDecrement(cartItem.product.id)
                          }
                        />
                        <RemoveButton
                          onClick={() =>
                            handleRemoveCoffeeFromCart(cartItem.product.id)
                          }
                        />
                      </div>
                    </div>

                    <div className="coffee-price">
                      <strong>R$ 9,90</strong>
                    </div>
                  </li>
                ))}
              </SelectedCoffeeList>

              <CoffeeTotal>
                <div className="price-itens">
                  <span>Total de itens</span>
                  <span>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(total)}
                  </span>
                </div>
                <div className="price-delivery">
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div className="price-total">
                  <strong>Total</strong>
                  <strong>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(total + 3.5)}
                  </strong>
                </div>
              </CoffeeTotal>

              <Button type="submit">Confirmar Pedido</Button>
            </>
          ) : (
            <>
              <p>Você não possui nenhum item adicionado ao carrinho.</p>
              <br />
              <NavLink to="/">Ir para lista de produtos</NavLink>
            </>
          )}
        </SelectedCoffeeContent>
      </CoffeeContainer>
    </CheckoutForm>
  );
}
