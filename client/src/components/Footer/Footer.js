import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Logo,
  AimButton,
} from "./Footerstyles";
import VideoLogo from "../Navbar/VideoLogo";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Logo>
            <VideoLogo />
            <h1 style={{ color: "green", paddingTop: "20px" }}>Zenify</h1>
          </Logo>
          <Column>
            <Heading>About Us</Heading>
            <AimButton to="/about-us">Team</AimButton>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink
              href="https://github.com/Cmbailey089/zenify"
              target="_blank"
            >
              GitHub
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
