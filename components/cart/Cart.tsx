import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/Theme";
import { useAppSelector, useAppDispatch } from "../../hooks/useStoreHook";
import Image from "next/image";
import Button from "../Buttons/Button";

const Cart = () => {
  const { updateQuantity } = useAppDispatch();

  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  return (
    <CartStyles>
      {cartProducts.length === 0 ? (
        <h1>Your cart is Empty, Continue Shopping</h1>
      ) : (
        <>
          <div className="cart__header">
            <h1>Cart ({cartProducts.length})</h1>
            <button>Remove all</button>
          </div>
          <>
            {cartProducts.map((product) => (
              <div key={product.id} className="cart__items">
                <Image
                  width={60}
                  height={50}
                  src={product.product.image.desktop}
                  alt={`${product.id} image`}
                />
                <h1>{product.product.name}</h1>
                <h2>${product.product.price}</h2>
                <button
                  disabled={product.quantity === 1}
                  onClick={() =>
                    updateQuantity({
                      type: "DECREMENT",
                      id: product?.id,
                    })
                  }
                >
                  <h1>-</h1>
                </button>

                <h1>{product.quantity}</h1>

                <button
                  onClick={() =>
                    updateQuantity({
                      type: "INCREMENT",
                      id: product?.id,
                    })
                  }
                >
                  <h1>+</h1>
                </button>
              </div>
            ))}
          </>
          <h1>TOTAL</h1>
          <Button text={"CHECKOUT"} variant={"PINK_DARK"} />
        </>
      )}
    </CartStyles>
  );
};

export default Cart;

const CartStyles = styled.div`
  width: 37.7rem;
  height: 48.8rem;
  background-color: ${colors.colorWhite};
  position: absolute;
  z-index: 100;
  right: 5rem;
  top: 10rem;
  padding: 3rem 1rem;

  .cart {
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
    &__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
  }
`;
