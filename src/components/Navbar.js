import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import MobileSlider from "@material-ui/core/Drawer";
import avatar from "../pp.jpeg";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    ListItemIcon: <Home />,
    ListItemText: "Home",
    ListPath: "/"
  },
  {
    ListItemIcon: <AssignmentInd />,
    ListItemText: "Resume",
    ListPath: "/resume"
  },
  {
    ListItemIcon: <Apps />,
    ListItemText: "Portfolio",
    ListPath: "/portfolio"
  },
  {
    ListItemIcon: <ContactMail />,
    ListItemText: "Contact",
    ListPath: "/contact_us"
  }
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = slider => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Praveen Jaluvancha"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.ListPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.ListItemIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.ListItemText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Praveen's Portfolio
            </Typography>
            <MobileSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
