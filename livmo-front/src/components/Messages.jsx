import { Grid, Container, Divider, IconButton, Link } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useRef } from "react";
import { io } from "socket.io-client";
const socket = io();
function Messages() {
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const handleClick = () => {
    if (message) setSentMessages([...sentMessages, message]);
    setMessage("");
    buddy.current.scrollIntoView({ behaviour: "smooth" });
  };
  const buddy = useRef();

  //socket io live chat
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
    console.log("PINGING");
  };

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid
          style={{ border: "1px solid black", borderRadius: "8px 0 0 8px " }}
          item
          xs={4}
        >
          <SingleChat>
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="chatUser"
            />
            <span>
              <h3>Foulen Ben Foulen</h3>
              <p>Active 4h ago</p>
            </span>
          </SingleChat>
          <SingleChat>
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="chatUser"
            />
            <span>
              <h3>Foulen Ben Foulen</h3>
              <p>Active 4h ago</p>
            </span>
          </SingleChat>
        </Grid>
        <Grid
          style={{ border: "1px solid black", borderRadius: " 0 8px 8px 0 " }}
          item
          xs={8}
        >
          <ChatHeader>
            <span>
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="chatUser"
              />
              <h3>Foulen Ben Foulen</h3>
            </span>
            <span>
              <Link href="#">Block</Link>
              <Link href="#">Report</Link>
            </span>
          </ChatHeader>
          <Divider />
          <ChatSpace>
            <ChatBody>
              {sentMessages &&
                sentMessages.map((msg, index) => (
                  <SentMessage key={index}>
                    <p>{msg}</p>
                  </SentMessage>
                ))}
              <div ref={buddy}></div>
            </ChatBody>
            <span>
              <input
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                type="text"
                placeholder="Type message here ..."
              />
              <IconButton onClick={handleClick}>
                <SendIcon color="primary" />
              </IconButton>
            </span>
          </ChatSpace>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Messages;
const ChatSpace = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  input {
    background: white;
    border: 1px solid #eee;
    border-radius: 16px;
    width: 90%;
    padding: 12px;
  }
  span {
    width: 100%;
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
  }
`;
const ChatBody = styled.div`
  height: 50vh;
  overflow: auto;
`;
const SentMessage = styled.div`
  margin: 16px 0;
  border-radius: 32px;
  max-width: 70%;
  width: max-content;
  background: #48b6ff;
  color: white;
  padding: 12px;
`;

const SingleChat = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: #eee;
  }
  span {
    display: flex;
    flex-direction: column;
  }
  img {
    border-radius: 100%;
    height: 48px;
    width: 48px;
    object-fit: cover;
    margin-right: 24px;
  }
`;
const ChatHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 48px;
    width: 48px;
    border-radius: 100%;
    margin-right: 32px;
    object-fit: cover;
  }
  span {
    display: flex;
    align-items: center;
  }
  a {
    margin-right: 12px;
  }
`;
