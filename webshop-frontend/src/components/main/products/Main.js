import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Shoe1 from "../../../images/shoe1.png";
import Shoe2 from "../../../images/shoe2.png";
import Shoe3 from "../../../images/shoe3.png";
import Shoe4 from "../../../images/shoe4.png";
import Shoe5 from "../../../images/shoe5.png";

const ProductContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 5px;
  margin-right: 5px;
  h1 {
    font-weight: bold;
    font-size: 4rem;
    margin-top: 10px;
  }

  hr {
    border-top: 2px solid #d5d5d5;
    width: 90%;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
  }
`;

function Main() {
  const shoeList = [Shoe3, Shoe3, Shoe3, Shoe4, Shoe5, Shoe5, Shoe5];
  return (
    <ProductContainer>
      <h1>Products</h1>
      <hr />
      {shoeList.map((shoe, index) => {
        return <Card key={index} shoe={shoe} index={index} />;
      })}
    </ProductContainer>
  );
}

export default Main;
