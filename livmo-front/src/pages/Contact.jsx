import React from "react";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import styled from "styled-components";
import { Grid } from "@mui/material";

import { Container } from "@mui/system";
import Form from "../components/Form";
function Contact() {
  return (
    <Div>
      <h1>Contact Information</h1>
      <Container>
        <Grid container spacing={2}>
          <SubGrid item sm={12} xs={12} md={6}>
            <MyIcon src={whatsapp} alt="" />
            <p>+214 22 000 000</p>
          </SubGrid>
          <SubGrid item sm={12} xs={12} md={6}>
            <MyIcon src={mail} alt="" />
            <p>Livmo@contact.com</p>
          </SubGrid>
          <SubGrid item sm={12} xs={12} md={6}>
            <MyIcon src={facebook} alt="" />
            <p>www.facebook.com/livmo</p>
          </SubGrid>
          <SubGrid item sm={12} xs={12} md={6}>
            <MyIcon src={instagram} alt="" />
            <p>www.instagram.com/livmo</p>
          </SubGrid>
        </Grid>
      </Container>
      <Form />
    </Div>
  );
}

export default Contact;
const MyIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-right: 24px;
  @media only screen and (min-width: 760px) {
    width: 64px;
    height: 64px;
    margin-right: 96px;
  }
`;
const SubGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    color: #e42651;
    margin: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
`;
