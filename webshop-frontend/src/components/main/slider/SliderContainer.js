import React from "react";
import styled from "styled-components";
import Shoe3 from "../../../images/shoe3.png";
import Shoe4 from "../../../images/shoe4.png";
import Shoe5 from "../../../images/shoe5.png";
import Card from "../products/Card";

const SliderContainerDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 70vh;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    height: 50vh;
  }
  @media screen and (max-width: 660px) {
    height: 30vh;
  }

  .slider {
    position: absolute;
    width: 400%;
    height: 100%;
    float: left;
    animation: slider 15s linear infinite;
  }

  .slide {
    position: relative;
    width: 100 / 4 * 1%;
    height: 100%;
    float: left;
  }
  @keyframes slider {
    0% {
      left: 0;
    }
    16.6% {
      left: 0;
    }
    33.3% {
      left: -100%;
    }
    50% {
      left: -100%;
    }
    66.6% {
      left: -200%;
    }
    83.3% {
      left: -200%;
    }
    100% {
      left: 0;
    }
  }
`;

function SliderContainer() {
  const shoeList = [Shoe3, Shoe3, Shoe3, Shoe4, Shoe4, Shoe4, Shoe5, Shoe5, Shoe5];
  return (
    <SliderContainerDiv>
      <div className="slider">
        {shoeList.map((shoe, index) => {
          return (
            <div className="slide">
              <Card key={index} shoe={shoe} index={index} />
            </div>
          );
        })}
      </div>
    </SliderContainerDiv>
  );
}

export default SliderContainer;
