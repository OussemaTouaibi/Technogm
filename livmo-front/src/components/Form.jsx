import { Card } from "@mui/material";
import React from "react";
// import { InputLabel, TextField } from "@mui/material";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";
import styled from "styled-components";
import Banner from "../assets/formBanner.jpg";
function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e7hg8gg",
        "template_r5ylivt",
        form.current,
        "T4UFU2UlNljUNjwY-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        form.reset();
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };
  return (
    <MyCard sx={{ borderRadius: "32px" }}>
      <img src={Banner} alt="" />
      <MyForm ref={form} onSubmit={handleSubmit}>
        <h2>How can we help ?</h2>
        <label htmlFor="topic">Please select a Topic</label>
        <select
          name="topic"
          placeholder="Topic"
          id="topic"
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <option value={"item1"}>Item 1</option>
          <option value={"item2"}>Item 2</option>
          <option value={"item3"}>Item 3</option>
        </select>
        <div>
          <span>
            <label htmlFor="name">Full Name</label>
            <input
              label="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              name="name"
            />
          </span>
          <span>
            <label htmlFor="phone number">Phone</label>
            <input
              label="Phone number"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="phone number"
              name="phone number"
            />
          </span>
        </div>

        <label htmlFor="email">Email</label>
        <input
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          type="email"
          name="email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          rows={6}
          label="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="message"
          name="message"
        />

        <button type="submit">Send</button>
      </MyForm>
    </MyCard>
  );
}

export default Form;
const MyCard = styled(Card)`
  display: flex;
  padding: 0;
  justify-content: space-between;
  margin: 24px;

  img {
    display: none;
    @media only screen and (min-width: 760px) {
      width: 50%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
`;
const MyForm = styled.form`
  @media only screen and (min-width: 760px) {
    width: 50%;
  }
  padding: 48px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    color: #e42651;
    margin-bottom: 16px;
    font-weight: bold;
  }
  label {
    font-weight: bold;
    margin-top: 16px;
  }
  input,
  select,
  textarea {
    border-radius: 8px;
    background: white;
    border: 1px solid grey;
    min-height: 32px;
    width: 100%;
  }
  button {
    border-radius: 32px;
    background: linear-gradient(
      90deg,
      #f02f32 0%,
      #e22357 59.52%,
      #da1d6c 100%
    );
    border: none;
    color: white;
    padding: 8px 24px;
    text-align: center;
    font-weight: bold;
    align-self: flex-end;
    text-transform: uppercase;
    margin-top: 16px;
  }

  div {
    width: 100%;
    display: flex;

    justify-content: space-between;
    align-items: center;
    span {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
