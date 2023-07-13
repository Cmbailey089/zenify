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
  const handleDeleteUser = () => {
    // Code to delete the user goes here
    console.log("User deleted");
  };

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

          <Column>
            <Heading>Delete User</Heading>
            <AimButton onClick={handleDeleteUser}>Delete</AimButton>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
