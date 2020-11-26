import React, { useRef } from "react";
import Shoe5 from "../../../images/shoe4.png";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    transform-style: preserve-3d;
    min-height: 80vh;
    width: 35rem;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    padding: 0rem 5rem;
  }

  .sneaker {
    min-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sneaker .img {
    transition: all 1s ease-in-out;
    z-index: 2;
    width: 20rem;
  }

  .circle {
    width: 15rem;
    height: 15rem;
    background: linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(8, 83, 156, 0.75));
    position: absolute;
    z-index: 1;
    border-radius: 50%;
  }

  .info h1 {
    font-size: 3rem;
  }

  .info h3 {
    transition: all 1s ease-in-out;
    transition: all 0.5s ease;
    font-size: 1.3rem;
    padding: 2rem 0rem;
    color: #585858;
    font-weight: lighter;
  }

  @media (max-height: 900px) {
    .info h1 {
      font-size: 2rem;
    }
    .info h3 {
      font-size: 1rem;
    }
  }

  .sizes {
    display: flex;
    justify-content: space-between;
  }

  .sizes button {
    transition: all 1s ease-in-out;
    padding: 0.5rem 2rem;
    background: none;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    color: #585858;
  }
  button.active {
    background: #585858;
    color: white;
  }

  .purchase {
    margin-top: 5rem;
  }

  .purchase button {
    transition: all 1s ease-in-out;
    width: 100%;
    padding: 1rem 0rem;
    background: #f54642;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    font-weight: bolder;
  }
`;

const DetailCard = () => {
  const cardContainer = useRef();
  const card = useRef();
  const sneaker = useRef();
  const title = useRef();
  const purchase = useRef();
  const info = useRef();
  const sizes = useRef();

  const mouseLeave = (e) => {
    card.current.style.transition = "all 0.5s ease";
    sneaker.current.style.transition = "all 0.5s ease";
    title.current.style.transition = "all 0.5s ease";
    sizes.current.style.transition = "all 0.5s ease";
    purchase.current.style.transition = "all 0.5s ease";
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.current.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.current.style.transform = "translateZ(0px)";
    sizes.current.style.transform = "translateZ(0px)";
    info.current.style.transform = "translateZ(0px)";
    purchase.current.style.transform = "translateZ(0px)";
  };

  const movement = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    sneaker.current.style.transform = "translateZ(200px) rotateZ(300deg)";
    card.current.style.transition = "none";
    title.current.style.transform = "translateZ(150px)";
    sizes.current.style.transform = "translateZ(150px)";
    info.current.style.transform = "translateZ(150px)";
    purchase.current.style.transform = "translateZ(150px)";
  };

  return (
    <CardContainer ref={cardContainer} onMouseLeave={mouseLeave} onMouseMove={movement}>
      <div className="card" ref={card}>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={Shoe5} alt="adidas" className="img" ref={sneaker} />
        </div>
        <div className="info">
          <h1 className="title" ref={title}>
            Adidas ZX
          </h1>
          <h3 ref={info}>FUTURE READY TRAINER WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
          <div className="sizes" ref={sizes}>
            <button className="">39</button>
            <button>40</button>
            <button className="active">41</button>
            <button>42</button>
          </div>
          <div className="purchase">
            <button ref={purchase}>Purchase</button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default DetailCard;
