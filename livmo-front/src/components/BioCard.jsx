import React from "react";
import { Card, CardContent } from "@mui/material";
import styled from "styled-components";
function BioCard() {
  return (
    <MyCard>
      <CardContent>
        <h2>Biography</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          obcaecati cupiditate dignissimos exercitationem beatae sequi numquam
          sunt et. Maiores eligendi modi sit maxime dolorum velit quaerat error
          consequatur id animi.
        </p>
      </CardContent>
    </MyCard>
  );
}

export default BioCard;

const MyCard = styled(Card)`
  width: 90%;
  margin: 16px 0;
  padding: 16px;
  border-radius: 8px;
`;
