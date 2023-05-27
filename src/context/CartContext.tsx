/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useState } from "react";

interface CoffeeItem {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  imageUrl: string;
}

interface CartItem {
  product: CoffeeItem;
  amount: number;
  total: number;
}

interface CartContextProps {
  cart: CartItem[];
  addCoffeeIntoCart: (coffee: CoffeeItem, amount: number) => void;
  removeCoffeeFromCart: (id: number) => void;
  incrementCartItemAmount: (id: number) => void;
  decrementCartItemAmount: (id: number) => void;
}
export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addCoffeeIntoCart(coffee: CoffeeItem, amount: number) {
    const findCoffee = cart.find(cartItem => cartItem.product.id === coffee.id);

    if (findCoffee === undefined) {
      const newItem: CartItem = {
        product: coffee,
        amount,
        total: coffee.price * amount,
      };
      setCart(state => [...state, newItem]);
    } else {
      setCart(state =>
        state.map(cartItem => {
          if (cartItem.product.id === coffee.id) {
            return {
              ...cartItem,
              amount: amount + cartItem.amount,
              total: Math.round(
                (amount + cartItem.amount) * cartItem.product.price
              ),
            };
          }

          return cartItem;
        })
      );
    }
  }

  function removeCoffeeFromCart(id: number) {
    setCart(state => state.filter(cartItem => cartItem.product.id !== id));
  }
  function incrementCartItemAmount(id: number) {
    setCart(state =>
      state.map(cartItem => {
        if (cartItem.product.id === id && cartItem.amount <= 99) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
            total: (cartItem.amount + 1) * cartItem.product.price,
          };
        }

        return cartItem;
      })
    );
  }

  function decrementCartItemAmount(id: number) {
    setCart(state =>
      state.map(cartItem => {
        if (cartItem.product.id === id && cartItem.amount > 1) {
          return {
            ...cartItem,
            amount: cartItem.amount - 1,
            total: (cartItem.amount - 1) * cartItem.product.price,
          };
        }

        return cartItem;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeIntoCart,
        removeCoffeeFromCart,
        incrementCartItemAmount,
        decrementCartItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
