import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Footerstyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <h1 style={{ color: "green", paddingTop: "20px"}}>Zenify</h1>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            {/* <FooterLink href="#">Vision</FooterLink> */}
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">GitHub</FooterLink>
            {/* <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink> */}
          </Column>
          {/* <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column> */}
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;

// import React from "react";
// import "./Footerstyles.css";

// const Footer = () => {
//   return (
//     <div className="box">
//       <h1 className="heading">
//         GeeksforGeeks: A Computer Science Portal for Geeks
//       </h1>
//       <div className="container">
//         <div className="row">
//           <div className="column">
//             <h2 className="heading">About Us</h2>
//             <a href="#" className="footer-link">
//               Aim
//             </a>
//           </div>
//           <div className="column">
//             <h2 className="heading">Services</h2>
//             <a href="#" className="footer-link">
//               Writing
//             </a>
//             <a href="#" className="footer-link">
//               Internships
//             </a>
//             <a href="#" className="footer-link">
//               Coding
//             </a>
//           </div>
//           <div className="column">
//             <h2 className="heading">Contact Us</h2>
//             <a href="#" className="footer-link">
//               Uttar Pradesh
//             </a>
//             <a href="#" className="footer-link">
//               Ahemdabad
//             </a>
//             <a href="#" className="footer-link">
//               Indore
//             </a>
//             <a href="#" className="footer-link">
//               Mumbai
//             </a>
//           </div>
//           <div className="column">
//             <h2 className="heading">Social Media</h2>
//             <a href="#" className="footer-link">
//               <i className="fab fa-facebook-f"></i>
//               <span className="social-media-text">Facebook</span>
//             </a>
//             <a href="#" className="footer-link">
//               <i className="fab fa-instagram"></i>
//               <span className="social-media-text">Instagram</span>
//             </a>
//             <a href="#" className="footer-link">
//               <i className="fab fa-twitter"></i>
//               <span className="social-media-text">Twitter</span>
//             </a>
//             <a href="#" className="footer-link">
//               <i className="fab fa-youtube"></i>
//               <span className="social-media-text">Youtube</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
