import React from 'react';
import { styled, createTheme } from "@mui/material/styles";
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ExitToApp as LogoutIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import { logout } from "../../redux/reducers/authSlice";
import { useAppDispatch } from "../../redux";
import Profile from "../Profile";
import Schemes from "../Schemes";
import Application from "../Application";

const drawerWidth = 240;

const theme = createTheme();

const MainContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  overflow: 'scroll',
  height: '100%'
}));

const Home = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Small Farmers Welfare Fund
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            color="inherit"
            aria-label="Logout"
            onClick={() => dispatch(logout())}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
        <Hidden mdUp implementation="js"> {/* Hide the drawer on screens equal to or smaller than md */}
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: "flex",
              [`& .MuiDrawer-paper`]: { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            <Toolbar />
            <div style={{ overflow: "auto" }}>
              <List>
                <ListItem
                  button
                  key="Schemes"
                  component={Link}
                  to="/home/schemes"
                  selected={location.pathname === "/home/schemes"}
                >
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Schemes" />
                </ListItem>
                <ListItem
                  button
                  key="Profile Management"
                  component={Link}
                  to="/home/profile-management"
                  selected={location.pathname === "/home/profile-management"}
                >
                  <ListItemIcon>
                    <SecurityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile Management" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css"> {/* Hide the drawer on screens smaller than sm using CSS */}
          <Drawer
            variant="permanent"
            open
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            <Toolbar />
            <div style={{ overflow: "auto" }}>
              <List>
                <ListItem
                  button
                  key="Schemes"
                  component={Link}
                  to="/home/schemes"
                  selected={location.pathname === "/home/schemes"}
                >
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Schemes" />
                </ListItem>
                <ListItem
                  button
                  key="Profile Management"
                  component={Link}
                  to="/home/profile-management"
                  selected={location.pathname === "/home/profile-management"}
                >
                  <ListItemIcon>
                    <SecurityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile Management" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <MainContainer maxWidth="lg">
        <div style={{margin: 50}}></div>
        <Routes>
          <Route path="/" element={<Schemes/>} />
          <Route path="/schemes" element={<Schemes/>} />
          <Route path="/profile-management" element={<Profile/>} />
          <Route path="/application/:id" element={<Application/>} />
        </Routes>
      </MainContainer>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: theme.spacing(2),
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          copyright &copy;MNS 2023
        </Typography>
      </footer>
    </div>
  );
};

export default Home;
