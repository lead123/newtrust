// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Card,
  Menu,
  MenuItem,
  Paper,
  ListItemIcon,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Container,
  Box,
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import classeses from "../css/FoundationStyles.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";

// LOCAL-STYLING

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  appBar: {
    padding: "8px",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {},
  toolBar: { display: "flex" ,justifyContent:'space-between'},
  drawerWidth: {
    width: 250,
  },
  btn: {
    marginRight: theme.spacing(2),
  },
  button: {
    // display: "flex",
    fontFamily: "inherit",
    border: "none",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px ${theme.spacing(
      1
    )}px`,
    transition: "all .3s ease-out",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "rgba(0, 102, 255, 0.178)",
      boxShadow: "none",
    },
    // margin:'15px',
  },
  btnTxt: {
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: "3px",
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
  const Theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    },
  });
  return (
    <div className={classes.root}>
      <ThemeProvider theme={Theme}>
        <HideOnScroll {...props}>
          <AppBar className={classes.appBar} color="inherit">
            <Toolbar className={classes.toolBar}>
              <Link to="/" className={classes.title}>
                <Typography variant="h4">
                  <i className="fab fa-atlassian"></i>
                  Trigram
                </Typography>
              </Link>

              {isMobile ? (
                <div>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer}
                    transitionDuration={500}
                  >
                    {/* <div className={classes.toolbar} /> */}
                    <Divider />
                    <div className={classes.drawerWidth}>
                      <List className={classes.list} color="secondary">
                        <ListItem
                          button
                          onClick={toggleDrawer}
                          component={Link}
                          to="/"
                        >
                          <ListItemIcon>
                            <i class="fas fa-home"></i>
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem
                          button
                          onClick={toggleDrawer}
                          component={Link}
                          to="/About"
                        >
                          <ListItemIcon>
                            <i class="fas fa-window-restore"></i>
                          </ListItemIcon>
                          <ListItemText primary="About" />
                        </ListItem>
                        <ListItem
                          button
                          onClick={toggleDrawer}
                          component={Link}
                          to="/Project"
                        >
                          <ListItemIcon>
                            <i class="fas fa-project-diagram"></i>
                          </ListItemIcon>
                          <ListItemText primary="Projects" />
                        </ListItem>

                        <ListItem
                          button
                          onClick={toggleDrawer}
                          component={Link}
                          to="/Work"
                        >
                          <ListItemIcon>
                            <i class="fas fa-briefcase"></i>
                          </ListItemIcon>
                          <ListItemText primary="Work" />
                        </ListItem>
                  
                        <ListItem
                          button
                          onClick={toggleDrawer}
                          component={Link}
                          to="/Contact"
                        >
                          <ListItemIcon>
                            <i class="fas fa-address-book"></i>
                          </ListItemIcon>
                          <ListItemText primary="Contact" />
                        </ListItem>
                      </List>
                    </div>
                    <Divider />
                  </Drawer>
                </div>
              ) : (
                //          <ul className={classeses.nav_list }>
                // <li className={classeses.list}>
                //   <div className={classeses.nav_list_item}>
                //     <Link to='/'>home</Link>
                //     </div>
                //   </li>
                //   <li className={classeses.list}>
                //   <div className={classeses.nav_list_item}>
                //     <Link to='/About'>about</Link>
                //     </div>
                //   </li>
                //   <li className={classeses.list}>
                //   <div className={classeses.nav_list_item}>
                //     <Link to='/Project'>project</Link>
                //     </div>
                //   </li>
                //   <li className={classeses.list}>
                //   <div className={classeses.nav_list_item}>
                //     <Link to='/Work'>Work</Link>
                //     </div>
                //   </li>
                //   <li className={classeses.list}>
                //   <div className={classeses.nav_list_item}>
                //     <Link to='/Contact'>contact</Link>
                //     </div>
                //   </li>
                // </ul>
                <div className={classes.buttonContainer}>
                  <Button
                    component={Link}
                    to="/"
                    className={classes.button}
                    color="primary"
                  >
                    <Typography className={classes.btnTxt} variant="h6">
                      Home
                    </Typography>
                  </Button>
                  <Button
                    component={Link}
                    to="/About"
                    className={classes.button}
                  >
                    <Typography className={classes.btnTxt} variant="h6">
                      About
                    </Typography>
                  </Button>
                  <Button
                    component={Link}
                    to="/Project"
                    className={classes.button}
                  >
                    <Typography className={classes.btnTxt} variant="h6">
                      Project
                    </Typography>
                  </Button>
                  <Button
                    component={Link}
                    to="/Work"
                    className={classes.button}
                  >
                    <Typography className={classes.btnTxt} variant="h6">
                      Work
                    </Typography>
                  </Button>
                  <Button
                    component={Link}
                    to="/Contact"
                    className={classes.button}
                  >
                    <Typography className={classes.btnTxt} variant="h6">
                      Contact
                    </Typography>
                  </Button>
                  {/* <Box
                    display="flex"
                    justifyContent="flex-end"
                    p={1}
                    m={1}
                    className={classes.container}
                  >
                    <Box p={1}>
                      <Button className={classes.button} color="primary">
                        <Typography className={classes.btnTxt} variant="h6">
                          Home
                        </Typography>
                      </Button>
                    </Box>
                    <Box p={1}>
                      <Button className={classes.button}>
                        <Typography className={classes.btnTxt} variant="h6">
                          Project
                        </Typography>
                      </Button>
                    </Box>
                    <Box p={1}>
                      <Button className={classes.button}>
                        <Typography className={classes.btnTxt} variant="h6">
                          Work
                        </Typography>
                      </Button>
                    </Box>
                    <Box p={1}>
                      <Button className={classes.button}>
                        <Typography className={classes.btnTxt} variant="h6">
                          Contact
                        </Typography>
                      </Button>
                    </Box>
                  </Box> */}
                </div>
              )}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ThemeProvider>
    </div>
  );
};

export default Header;
