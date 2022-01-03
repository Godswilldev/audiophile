import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "../../Utils/Theme";
import logo from "../../assets/shared/desktop/logo.svg";
import { boldText } from "../../Utils/Typography";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer__nav">
          <Image className="footer__nav--logo" src={logo} alt="footer logo" />

          <ul className="footer__nav--links">
            <Link href="/">Home</Link>
            <Link href="/headphones">Headphones</Link>
            <Link href="/speakers">Speakers</Link>
            <Link href="/earphones">Earphones</Link>
          </ul>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;

const FooterStyles = styled.section`
  background-color: ${colors.colorBlack};
  height: 36.5rem;
  color: ${colors.colorLightWhite};
  padding: 0 10rem;

  &::before {
    content: "";
    width: 10.1rem;
    height: 0.4rem;
    background-color: ${colors.colorDarkPink};
    /* color: #ff0000; */
    position: absolute;
  }

  .footer {
    &__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5rem;
      /* padding: 0 10rem; */

      &--links {
        display: flex;
        justify-content: space-between;
        a {
          margin-right: 3rem;
          ${boldText}
          text-transform: uppercase;
          color: ${colors.colorWhite};
          transition: all 0.3s;
          &:hover {
            color: ${colors.colorDarkPink};
          }
        }
      }
    }
  }
`;
