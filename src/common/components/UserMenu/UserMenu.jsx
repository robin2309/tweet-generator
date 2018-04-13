import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._logOut = this._logOut.bind(this);

    this.state = {
      anchorEl: null
    };
  }

  _handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  _handleClose() {
    this.setState({ anchorEl: null });
  }

  _logOut() {
    window.location.href = '/logout';
  }

  render() {
    const { image, name } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className='user-menu'>
        <Avatar
          onClick={this._handleClick}
          className='user-menu__image'
          alt='profile'
          src={image}
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup='true'
        />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this._handleClose}
        >
          <MenuItem disabled>{name}</MenuItem>
          <MenuItem onClick={this._logOut}>
            <ListItemIcon>
              <Icon>exit_to_app</Icon>
            </ListItemIcon>
            <ListItemText inset primary='Sign out' />
          </MenuItem>
        </Menu>
      </div>
    );
  }
};

UserMenu.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default UserMenu;
