import React, { useEffect } from "react";
import logo from "../../images/logo.png";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  max-height: 10vh;
  background-color: #eae0ef;
  font-family: "Lobster", cursive;

  .logo {
    flex-grow: 1;
    padding: 4px;
    max-width: 225px;
  }
  .links {
    margin-bottom: 0;
    flex-grow: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style: none;

    a {
      flex-grow: 1;
      font-size: 35px;
      padding: 10px;
      text-decoration: none;
      color: var(--tertiaryColor);
      border-radius: 10px;
      &.active {
        color: black;
      }
      &:hover {
        background-color: var(--secondaryColor);
        color: white;
      }
    }
  }

  @media (max-width: 900px) {
    position: relative;

    .logo {
      z-index: 4;
    }

    .links {
      z-index: 3;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      height: 100vh;
      width: 100%;
      background-color: #161616;
      transition: all 1s ease-out;
      clip-path: circle(100px at 90% -20%);
      a {
        display: inline-block;
        padding: 20px 50px;
        color: white;
        &.active {
          color: black;
        }
        &:hover {
          color: white;
        }
      }

      &.toggle {
        clip-path: circle(1000px at 90% -10%);
        a {
          &.active {
            color: var(--secondaryColor);
          }
          &:hover {
            color: white;
          }
        }
      }
    }
    .switch {
      z-index: 3;
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translate(-5%, -50%);
      .bars {
        background: black;
        margin: 3px;
        width: 30px;
        height: 4px;
      }
      &.toggle {
        .bars {
          background: var(--primaryColor);
        }
      }
    }
  }
`;

function Navbar() {
  useEffect(() => {
    let links = document.querySelector(".links");
    document.querySelector(".switch").addEventListener("click", () => {
      links.classList.toggle("toggle");
      document.querySelector(".switch").classList.toggle("toggle");
    });
  });

  return (
    <Nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="links">
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#"> About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="switch">
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
    </Nav>
  );
}

export default Navbar;
