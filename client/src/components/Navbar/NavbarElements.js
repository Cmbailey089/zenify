import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Nav = styled.nav`
  background: #63d471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const DropdownMenu = styled.div`
  background: #63d471;
  position: absolute;
  top: 85px;
  right: 0;
  width: 200px;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const DropdownItem = styled(Link)`
  color: #808080;
  text-decoration: none;
  font-size: 18px;
  margin: 0.5rem 0;

  &:hover {
    color: #000000;
  }
`;

