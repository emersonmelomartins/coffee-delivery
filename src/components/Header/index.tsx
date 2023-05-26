import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoSvg from "../../assets/logo.svg";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import { CartLength, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoSvg}
          alt="Icone de café escrito Coffee Devilery ao lado"
        />
      </NavLink>

      <div className="menu-actions">
        <span className="menu-location">
          <MapPin size={24} weight="fill" color={defaultTheme.purple} />
          Porto Alegre, RS
        </span>

        <NavLink to="checkout">
          <button type="button">
            <ShoppingCart
              size={24}
              weight="fill"
              color={defaultTheme["yellow-dark"]}
            />
            <CartLength $show>3</CartLength>
          </button>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
