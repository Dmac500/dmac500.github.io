import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  background-color: grey ;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  z-index: 1000;
  border-radius: 50%;

`;

const NavBackground = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-image: radial-gradient(
    lightBlue,
   lightBlue 
  );
  height: 4rem;
  width: 5rem;
  border-radius: 0%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(100)" : "scale(0)")};

`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 2.6rem;
  margin-left: 1rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
 
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: darkcyan;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              About
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/skills">
              Skills
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/projects">
              Recent Projects
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/Contactme">
              Contact Me
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
