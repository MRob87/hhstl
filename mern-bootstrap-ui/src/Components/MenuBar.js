import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import MessageIcon from 'material-ui-icons/Message'
import Menu, { MenuItem } from 'material-ui/Menu';

import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuBar extends Component {
  state = {
    anchorEl: null,
    anchorElMessage: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClickMessagesList = event => {
    this.setState({ anchorElMessageList: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseMessagesList = () => {
    this.setState({ anchorElMessageList: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const { anchorElMessageList } = this.state;

    return (
      <div className="MenuBar">
        <AppBar position="static">
            <Toolbar>
              {/* Hamburger Menu */}
              <IconButton 
                aria-owns={anchorEl ? 'menu-list' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
                className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-list"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Sedneverson
              </Typography>
              {/* Messages */}
              <IconButton 
                aria-owns={anchorElMessageList ? 'message-list' : null}
                aria-haspopup="true"
                onClick={this.handleClickMessagesList}
                className={classes.messageButton} color="inherit" aria-label="Messages">
                <MessageIcon />
              </IconButton>
              <Menu
                id="messages-list"
                anchorEl={anchorElMessageList}
                open={Boolean(anchorElMessageList)}
                onClose={this.handleCloseMessagesList}
              >
                <MenuItem onClick={this.handleCloseMessagesList}><img src="yes.jpg" />Jesse - <br /> how are you?</MenuItem>
                <MenuItem onClick={this.handleCloseMessagesList}><img src="yes.jpg" />Dr. Martin -  <br />You need to see us</MenuItem>
              </Menu>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(MenuBar);