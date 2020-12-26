import React from "react";
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Github from "@material-ui/icons/GitHub";
import Linkedin from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem"
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Github />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Linkedin />}
      />
    </BottomNavigation>
  );
};

export default Footer;
