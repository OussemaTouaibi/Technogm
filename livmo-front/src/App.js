

import { createTheme, ThemeProvider } from "@mui/material/styles";
import TransportForm from "./components/TransportForm";

// import {Banner,MyButton, MyContainer, MyDivider} from "./components/CustomStyled"
// import DishForm from "./components/DishForm";
// import LodgingForm from "./components/LodgingForm";
import { DataContextProvider } from "./contexts/DataContext";
import UserMessages from "./pages/UserMessages";
// import UserProfile from "./pages/UserProfile";
// import Dashboard from "./pages/Dashboard";
// import FileImport from "./pages/FileImport";
//import UserProfile from "./pages/UserProfile";
import io from 'socket.io-client';
import { Route, Routes , Link , BrowserRouter as Router} from "react-router-dom";
import { useEffect, useState } from "react";
import DishForm from "./components/DishForm";
import { MyButton } from "./components/CustomStyled";

const socket = io();
function App() {
  const [isConnected,setIsConnected]=useState(socket.connected)
  const [lastPong,setLastPong]=useState(null)
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return (
    <Router>
  <DataContextProvider>
  <ThemeProvider theme={theme}>
  <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/transport">Form</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
          </ul>

          <div>
      <p>Connected: { '' + isConnected }</p>
      <p>Last pong: { lastPong || '-' }</p>
      <button onClick={ sendPing }>Send ping</button>
      
    </div>

  <Routes>
          <Route path="/" exact element={<DishForm/>} />
          <Route path="/transport" exact element={<TransportForm/>} />
          <Route path="/messages" exact element={<UserMessages/>} />
          
         
        
        </Routes>
    </ThemeProvider>
    </DataContextProvider>
    </Router>
  );
}

export default App;
const theme = createTheme({
  palette: {
    primary: {
      main: "#e42651",
    },
    secondary: {
      main: "#000",
    },
  },
    
});