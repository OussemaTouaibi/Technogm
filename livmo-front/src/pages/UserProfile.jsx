import React from "react";

import styled from "styled-components";
import { useState } from "react";
import { Divider, Card, Link } from "@mui/material";
import ExperiencCard from "../components/ExperiencCard";
import { MyButton } from "../components/UserCard";
import TestimonialCard from "../components/TestimonialCard";
import BioCard from "../components/BioCard";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SocialMedia from "../components/SocialMedia";

function UserProfile() {
  const [value, setValue] = useState(0);
  const [moreTestimonials, setMore] = useState(false);
  const toggleTestimonials = () => {
    setMore(!moreTestimonials);
  };
  return (
    <MyContainer>
      <ResponsiveDiv>
        <Left>
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile"
          />
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Verified"
              icon={<CheckCircleOutlineOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Favorites"
              icon={<FavoriteBorderOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Comments"
              icon={<ChatBubbleOutlineOutlinedIcon />}
            />
          </BottomNavigation>
          <Divider color="primary" />
          <p>Foulen Confirmation effectuee</p>
          <MyCard>
            <span>
              <CheckCircleOutlineOutlinedIcon />
              <p>Identity</p>
            </span>
            <span>
              <CheckCircleOutlineOutlinedIcon />
              <p>Email</p>
            </span>
            <span>
              <CheckCircleOutlineOutlinedIcon />
              <p>Phone number</p>
            </span>
          </MyCard>
          <MyCard>
            <p>
              <Link>Learn more</Link> on how confirming account information
              helps keep the LIVMO community safe .
            </p>
          </MyCard>
          <SocialMedia />
        </Left>
        <Right>
          <div>
            <h2 style={{ color: "#e42651" }}>Flen Ben Foulen</h2>
            <h5>Adventurer</h5>
            <h6>Member since 2022</h6>
            <h6>Lives in Italy</h6>
          </div>
          <BioCard />
          <h2>Lived Experiences</h2>
          <ExperiencCard />
          <span>
            <MyButton>
              <FavoriteIcon />
              23 Favorites
            </MyButton>
            <MyButton>
              <ChatBubbleOutlineOutlined />
              22 Comments
            </MyButton>
          </span>

          <TestimonialCard />
          <TestimonialCard />
          {moreTestimonials && (
            <React.Fragment>
              <TestimonialCard />
              <TestimonialCard />
            </React.Fragment>
          )}
          <MyButton onClick={toggleTestimonials}>
            Show {moreTestimonials ? "less" : "more"}
          </MyButton>
          <h2>Booked Experiences</h2>
          <ExperiencCard />
          <ExperiencCard />
        </Right>
      </ResponsiveDiv>
    </MyContainer>
  );
}
export default UserProfile;
const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Right = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
  }
  h2 {
    margin: 16px 0;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
    position: absolute;
    right: 0;
    align-items: flex-start;
  }
`;
const Left = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 128px;
    height: 128px;
    border-radius: 100%;
    object-fit: cover;
  }
  span {
    display: flex;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
    position: absolute;
    left: 0;
  }
`;
const MyCard = styled(Card)`
  padding: 16px;
  margin: 16px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  span {
    margin: 16px 0;
  }
`;
