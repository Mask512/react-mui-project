/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';

import AndroidIcon from '@mui/icons-material/Android';
import { Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Mask512
        </Typography>
        <AndroidIcon
          fontSize="large"
          sx={{ display: { xs: 'block', sm: 'none' } }}
        />

        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <Icons>
          <Badge badgeContent="4" color="error">
            <Mail />
          </Badge>

          <Badge badgeContent="2" color="error">
            <Notifications />
          </Badge>

          <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30, cursor: 'pointer' }}>DS</Avatar>
        </Icons>

        <UserBox onClick={() => setOpen(true)} sx={{cursor: 'pointer' }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
          >
            DS
          </Avatar>
          <Typography component="span">Dhimas</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="profile-menu"
        open={open}
        onClose={() => setOpen(false)}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
