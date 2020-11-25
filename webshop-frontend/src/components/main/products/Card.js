import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  margin: 20px;
  min-width: 400px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  flex-basis: 100px;
  padding: 2rem 2rem;
  background-color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translate(0, -10px);
  }
  .sneaker {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sneaker img {
    z-index: 2;
    width: 20rem;
  }
    .circle {
      width: 15rem;
      height: 15rem;
      background: linear-gradient(to top, rgb(246 229 255 / 75%),rgb(104 58 136)););
      position: absolute;
      z-index: 1;
      border-radius: 50%;
    }
  }

  .card-body {
    margin-top: 10px;
    text-align: left;
    .title {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
    h3 {
      font-size: 1.5rem;
      font-style: italic;
    }
  }

  @media (max-width: 930px) {
    flex-grow: 1;
    .sneaker img {
      z-index: 2;
      width: 25rem;
    }
  }
`;

function Card(props) {
  return (
    <CardDiv>
      <div className="sneaker">
        <div className="circle"></div>
        <img src={props.shoe} alt="shoe" className={`card-img${props.index}`} />
      </div>
      <div className="card-body">
        <h1 className="title">Adidas ZX</h1>
        <h3>FUTURE READY TRAINER WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
      </div>
    </CardDiv>
  );
}
export default Card;
