import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Shoe1 from "../../../images/shoe1.png";
import Shoe2 from "../../../images/shoe2.png";
import Shoe3 from "../../../images/shoe3.png";
import Shoe4 from "../../../images/shoe4.png";
import Shoe5 from "../../../images/shoe5.png";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 5px;
  margin-right: 5px;

  h1 {
    font-family: "Lobster", cursive;
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
  .link {
    margin: 20px;
    min-width: 25rem;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    flex-basis: 100px;
    padding: 2rem 2rem;
    background-color: white;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translate(0, -10px);
    }

    @media (max-width: 930px) {
      flex-grow: 1;
      .sneaker img {
        z-index: 2;
        width: 25rem;
      }
    }
  }
`;

const Main = () => {
  const shoeList = [Shoe3, Shoe3, Shoe3, Shoe4, Shoe4, Shoe4, Shoe5, Shoe5, Shoe5];
  return (
    <ProductContainer>
      <h1>Products</h1>
      <hr />
      {shoeList.map((shoe, index) => {
        return (
          <Link to={`/${index}`} className="link">
            <Card key={index} shoe={shoe} index={index} />
          </Link>
        );
      })}
    </ProductContainer>
  );
};

export default Main;
