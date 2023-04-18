import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction 
        icon={<Facebook />} 
        className={classes.root}
      />
      <BottomNavigationAction 
        icon={<LinkedIn />}
        className={classes.root} 
      />
      <BottomNavigationAction 
        icon={<GitHub />}
        className={classes.root} 
        href="https://github.com/sweetdream0530"
        target="_blank"
        rel="noopener noreferrer"
      />
    </BottomNavigation>
  );
};
export default Footer;
