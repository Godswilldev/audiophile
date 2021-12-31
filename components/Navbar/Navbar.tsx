import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import { useState, useEffect } from "react";

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
      <h1>Audiophile</h1>
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
`;
