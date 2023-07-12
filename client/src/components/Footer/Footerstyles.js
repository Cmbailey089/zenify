import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Box = styled.div`
  padding: 0px 0px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-items: center;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: green;
    transition: 200ms ease-in;
  }
`;

export const AimButton = styled(Link)`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Logo = styled.section`
  display: flex;
  justify-content: space-between;
  height: 143px;
  width: auto;

  @media (max-width: 768px) {
    height: 100px;
  }
`;
