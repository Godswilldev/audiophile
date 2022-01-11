import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import Zx7Speake from "../../assets/home/desktop/image-speaker-zx7.jpg";
import { h4 } from "../../Utils/Typography";
import Button from "./../Buttons/Button";

const Zx7Speaker = () => {
  return (
    <Zx7SpeakerStyles>
      <div className="zx7__Image">
        <Image height={320} src={Zx7Speake} alt="Zx7Speake" />
      </div>

      <div
        className="zx7__text"
        onClick={() => Router.push("/product/zx7-pseaker")}
      >
        <h1>ZX7 SPEAKER</h1>
        <Button text="see product" variant="BLACK" />
      </div>
    </Zx7SpeakerStyles>
  );
};

export default Zx7Speaker;

const Zx7SpeakerStyles = styled.div`
  position: relative;
  width: 100%;
  height: 32rem;
  border-radius: 0.8rem;
  overflow: hidden;

  .zx7__Image {
    border-radius: 0.8rem;
  }

  .zx7__text {
    position: absolute;
    left: 10rem;
    top: 10rem;
    h1 {
      ${h4}
      margin-bottom: 2rem;
    }
  }
`;
