import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import { useState, useEffect } from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { boldText } from "../../Utils/Typography";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = () =>
    window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
  }, [scrolled]);

  return (
    <NavbarStyles
      style={{
        position: scrolled ? "fixed" : "relative",
      }}
    >
      <div className="nav">
        <Image className="nav__logo" src={logo} alt="nav logo" />

        <ul className="nav__links">
          <Link href="/">Home</Link>
          <Link href="/headphones">Headphones</Link>
          <Link href="/speakers">Speakers</Link>
          <Link href="/earphones">Earphones</Link>
        </ul>

        <Image src={cart} alt="cart" />
      </div>
    </NavbarStyles>
  );
};

export default Navbar;

const NavbarStyles = styled.nav`
  background-color: ${colors.colorBlack};
  height: 9.7rem;
  width: 100%;
  padding: 10px;
  color: ${colors.colorWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__logo {
    }

    &__links {
      display: flex;
      justify-content: space-between;
      a {
        margin-right: 3rem;
        ${boldText}
        text-transform: uppercase;
        color: ${colors.colorWhite};
      }
    }
  }
`;
