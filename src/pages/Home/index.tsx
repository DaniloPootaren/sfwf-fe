import { styled, createTheme } from "@mui/material/styles";
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
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

const drawerWidth = 240;

const theme = createTheme();

const MainContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  overflow: 'scroll',
  marginBottom: theme.spacing(10),
}));

const Home = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
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
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth },
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
      <MainContainer maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Main Content
        </Typography>
        <Routes>
          <Route path="/" element={<h1>Schemes</h1>} />
          <Route path="/schemes" element={<Schemes/>} />
          <Route path="/profile-management" element={<Profile/>} />
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
