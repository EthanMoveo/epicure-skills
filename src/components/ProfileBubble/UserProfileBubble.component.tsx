import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

import { ProfileBubble } from "./UserProfileBubble.styles";

const UserProfileBubble: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const user = localStorage.getItem("user") || "";
    const initial = user.charAt(0).toUpperCase();
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.reload();
    };
  
    return (
      <>
        <ProfileBubble onClick={handleClick}>{initial}</ProfileBubble>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </>
    );
  };
  
  export default UserProfileBubble;