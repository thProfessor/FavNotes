import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: theme.palette.secondary.main,
  },
}));
const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <HomeOutlinedIcon color="primary" />,
    },
    {
      id: 2,
      name: "Create",
      path: "/create",
      icon: <CreateOutlinedIcon color="primary" />,
    },
  ];
  return (
    <Container>
      <AppBar position="fixed" color="secondary" className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h4" align="center">
            Fav Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h4">Pages</Typography>
        <List>
          {links.map((link) => {
            return (
              <ListItem id={link.id} button onClick={() => navigate(link.path)}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name}></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Paper elevation={0}>{children}</Paper>
    </Container>
  );
};
export default Layout;
