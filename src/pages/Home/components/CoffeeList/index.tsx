import { useContext } from "react";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

import { CartContext } from "../../../../context/CartContext";

import arabe from "../../../../assets/cafe-arabe.png";
import capuccino from "../../../../assets/cafe-capuccino.png";
import leite from "../../../../assets/cafe-com-leite.png";
import cubano from "../../../../assets/cafe-cubano.png";
import americano from "../../../../assets/cafe-expresso-americano.png";
import cremoso from "../../../../assets/cafe-expresso-cremoso.png";
import gelado from "../../../../assets/cafe-expresso-gelado.png";
import tradicional from "../../../../assets/cafe-expresso-tradicional.png";
import havaiano from "../../../../assets/cafe-havaiano.png";
import irlandes from "../../../../assets/cafe-irlandes.png";
import latte from "../../../../assets/cafe-latte.png";
import macchiato from "../../../../assets/cafe-macchiato.png";
import mocaccino from "../../../../assets/cafe-mocaccino.png";
import quente from "../../../../assets/chocolate-quente.png";

export const MOCKDATA = [
  {
    id: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: ["Tradicional"],
    imageUrl: tradicional,
  },
  {
    id: 2,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    tags: ["Tradicional"],
    imageUrl: americano,
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    tags: ["Tradicional"],
    imageUrl: cremoso,
  },
  {
    id: 4,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
    imageUrl: gelado,
  },
  {
    id: 5,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    imageUrl: leite,
  },
  {
    id: 6,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    imageUrl: latte,
  },
  {
    id: 7,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    imageUrl: capuccino,
  },
  {
    id: 8,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    imageUrl: macchiato,
  },
  {
    id: 9,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    imageUrl: mocaccino,
  },
  {
    id: 10,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    tags: ["Especial", "Com Leite"],
    imageUrl: quente,
  },
  {
    id: 11,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    tags: ["Especial", "Alcoólico", "Gelado"],
    imageUrl: cubano,
  },
  {
    id: 12,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    tags: ["Especial"],
    imageUrl: havaiano,
  },
  {
    id: 13,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    tags: ["Especial"],
    imageUrl: arabe,
  },
  {
    id: 14,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    tags: ["Especial", "Alcoólico"],
    imageUrl: irlandes,
  },
];

interface CoffeeItem {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  imageUrl: string;
}

export function CoffeeList() {
  const { addCoffeeIntoCart } = useContext(CartContext);

  function handleAddCoffeeIntoCart(coffee: CoffeeItem, amount: number) {
    addCoffeeIntoCart(coffee, amount);
    toast.success(
      <span>
        Item adicionado ao carrinho!{"\n"}
        <NavLink to="/checkout">
          <strong>Ir para meu pedido</strong>
        </NavLink>
      </span>
    );
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <div className="coffee-list">
        {MOCKDATA.map(coffee => (
          <CoffeeCard
            key={coffee.id}
            coffeeItem={coffee}
            onClickAddToCart={handleAddCoffeeIntoCart}
          />
        ))}
      </div>
    </CoffeeListContainer>
  );
}
