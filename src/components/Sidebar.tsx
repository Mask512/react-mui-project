import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import {
  DarkMode,
  Group,
  Groups,
  Home,
  LightMode,
  Pages,
  Person2,
  Settings,
  ShoppingBasket,
} from '@mui/icons-material';

import { Dispatch, SetStateAction } from 'react';

type SidebarProps = {
  setMode: Dispatch<SetStateAction<'dark' | 'light'>>;
  mode: 'dark' | 'light';
};

export const Sidebar = ({ setMode, mode }: SidebarProps) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box position="fixed">
        <Box>
          <List sx={{height: '100vh'}}>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#pages">
                <ListItemIcon>
                  <Pages />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#groups">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#marketplace">
                <ListItemIcon>
                  <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#friends">
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#settings">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#profile">
                <ListItemIcon>
                  <Person2 />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ position: 'absolute', bottom: 100 }}>
              <ListItemButton
                onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
              >
                <ListItemIcon>
                  {mode === 'dark' ? <LightMode /> : <DarkMode />}
                </ListItemIcon>
                <Switch checked={mode === 'dark'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
