import React from "react";
import logo from "../assets/logo.png";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import styled from "styled-components";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LogoutIcon from "@mui/icons-material/Logout";
import { Container } from "@mui/system";
import {
  Badge,
  Collapse,
  Link,
  Pagination,
  TablePagination,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import myImage from "../assets/logo.png";
export default function Dashboard({ hosts }) {
  // const rows = [
  //   { name: "flen ben foulen", id: 12345 },
  //   { name: "flen ben foulen", id: 12341 },
  //   { name: "flen ben foulen", id: 12342 },
  //   { name: "flen ben foulen", id: 12343 },
  //   { name: "flen ben foulen", id: 12344 },
  //   { name: "flen ben foulen", id: 12346 },
  //   { name: "flen ben foulen", id: 12347 },
  //   { name: "flen ben foulen", id: 12349 },
  //   { name: "flen ben foulen", id: 22340 },
  //   { name: "flen ben foulen", id: 32340 },
  //   { name: "flen ben foulen", id: 52340 },
  //   { name: "flen ben foulen", id: 42340 },
  //   { name: "flen ben foulen", id: 62340 },
  //   { name: "flen ben foulen", id: 72340 },
  //   { name: "flen ben foulen", id: 82340 },
  //   { name: "flen ben foulen", id: 92340 },
  //   { name: "flen ben foulen", id: 92540 },
  // ];
  const [isChecked, setIsChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [option, setOption] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(
      hosts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  };
  return (
    <Container>
      <img height="64px" src={logo} alt="" />
      <Content>
        <SideBar>
          <List>
            <ListItem>
              <div className="Name">
                <img
                  height="48px"
                  width="48px"
                  style={{ borderRadius: "100%" }}
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="profile"
                />
                <h3>Flen Ben Foulen</h3>
              </div>
            </ListItem>
            <Divider style={{ margin: "16px 0" }} />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Host" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Merchant" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Client" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Notification" />
                <Badge badgeContent={12} color="primary" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PaymentIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Payment" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon color="primary" />
                </ListItemIcon>
                <div>
                  <ListItemText
                    onClick={() => {
                      setIsChecked(!isChecked);
                    }}
                    primary="Reservation"
                  />
                  <Collapse in={isChecked}>
                    <ListItemButton root>Experience</ListItemButton>
                    <ListItemButton>Services</ListItemButton>
                  </Collapse>
                </div>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ArticleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <QuestionAnswerIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Chat" />
                <Badge badgeContent={3} color="primary" />
              </ListItemButton>
            </ListItem>
            <Divider style={{ margin: "16px 0" }} />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </SideBar>
        <CenterBox>
          <List>
            <ListItem>
              <h3>Host</h3>
            </ListItem>
          </List>
          <Divider style={{ margin: "16px 0" }} />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">RNE</TableCell>
                <TableCell align="center">Licence</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Validate</TableCell>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hosts &&
                hosts
                  .slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((host) => (
                    <TableRow
                      key={host._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{host.name}</TableCell>
                      <TableCell align="right">{host.id}</TableCell>
                      <TableCell align="right">
                        <Link>Download</Link>
                      </TableCell>
                      <TableCell align="right">
                        <Link>Download</Link>
                      </TableCell>
                      <TableCell align="right">
                        <Link>Delete</Link>
                      </TableCell>
                      <TableCell align="right">
                        <Link>Validate</Link>
                      </TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
          <div>
            <Pagination
              count={parseInt(hosts.length / rowsPerPage) + 1}
              color="primary"
              onChange={handleChangePage}
            />
            {/* <TablePagination
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              color="primary"
            /> */}
          </div>
        </CenterBox>
      </Content>
      <a href="/test">add host</a>
    </Container>
  );
}
const SideBar = styled(Box)`
  width: 25%;
  background: #f3f3f3;
  border-radius: 48px;
  overflow: hidden;
  .Name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }
  span {
    margin-right: 8px;
  }
`;
const CenterBox = styled(Box)`
  width: 73%;
  background: #f3f3f3;
  border-radius: 48px;
  overflow: hidden;
  padding: 16px;
  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
