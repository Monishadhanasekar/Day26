import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function DenseMenu() {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 2,
            width: 400,
            height: 420,
          },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          sx={{
            margin: 2,
            maxWidth: 350,
            borderRadius: 8,
            '&:hover': {
              boxShadow: '0 0 4em 0px rgba(0, 0, 0, 0.4)',
              transform: ' scale(1.01)',
            },
          }}
        >
          <Typography component="div" justify="center" align="center">
            <Box sx={{ fontWeight: 'light', fontSize: 12, m: 1 }}>FREE</Box>
            <Box sx={{ fontWeight: 'bold', fontSize: 35, m: 1 }}>
              $0<sub style={{ fontSize: 12 }}>/month</sub>
            </Box>
          </Typography>
          <MenuList dense alignItems="center">
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              single user
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              5GB storage
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Unlimited Public Projects
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Community access
            </MenuItem>
            <MenuItem disabled>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              Unlimited Private Projects
            </MenuItem>
            <MenuItem disabled>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              Dedicated Phone Support
            </MenuItem>
            <MenuItem disabled>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              Free Subdomain
            </MenuItem>
            <MenuItem disabled>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              Monthly Status Reports
            </MenuItem>
            <br />
            <Box textAlign="center">
              <Button
                variant="contained"
                style={{
                  borderRadius: 35,
                  width: 300,
                  height: 35,
                  fontSize: 15,
                }}
              >
                Button
              </Button>
            </Box>
          </MenuList>
        </Paper>
        <Paper
          sx={{
            margin: 2,
            maxWidth: 350,
            borderRadius: 8,
            '&:hover': {
              boxShadow: '0 0 4em 0px rgba(0, 0, 0, 0.4)',
              transform: ' scale(1.01)',
            },
          }}
        >
          <Typography component="div" justify="center" align="center">
            <Box sx={{ fontWeight: 'light', fontSize: 12, m: 1 }}>PLUS</Box>
            <Box sx={{ fontWeight: 'bold', fontSize: 35, m: 1 }}>
              $9<sub style={{ fontSize: 12 }}>/month</sub>
            </Box>
          </Typography>
          <MenuList dense alignItems="center">
            <Divider />
            <MenuItem style={{ fontWeight: 'bold' }}>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              5 users
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              50GB storage
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Unlimited Public Projects
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Community access
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Unlimited Private Projects
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Dedicated Phone Support
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Free Subdomain
            </MenuItem>
            <MenuItem disabled>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              Monthly Status Reports
            </MenuItem>
            <br />
            <Box textAlign="center">
              <Button
                variant="contained"
                style={{
                  borderRadius: 35,
                  width: 300,
                  height: 35,
                  fontSize: 15,
                }}
              >
                Button
              </Button>
            </Box>
          </MenuList>
        </Paper>
        <Paper
          sx={{
            width: 320,
            margin: 2,
            maxWidth: 350,
            borderRadius: 8,
            '&:hover': {
              boxShadow: '0 0 4em 0px rgba(0, 0, 0, 0.4)',
              transform: ' scale(1.01)',
            },
          }}
        >
          <Typography component="div" justify="center" align="center">
            <Box sx={{ fontWeight: 'light', fontSize: 12, m: 1 }}>PRO</Box>
            <Box sx={{ fontWeight: 'bold', fontSize: 35, m: 1 }}>
              $49<sub style={{ fontSize: 12 }}>/month</sub>
            </Box>
          </Typography>
          <MenuList dense alignItems="center">
            <Divider />
            <MenuItem style={{ fontWeight: 'bold' }}>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Unlimited Users
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              150GB storage
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Unlimited Public Projects
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Community access
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Unlimited Private Projects
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Dedicated Phone Support
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <strong>Unlimited</strong> Free Subdomains
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Monthly Status Reports
            </MenuItem>
            <br />
            <Box textAlign="center">
              <Button
                variant="contained"
                style={{
                  borderRadius: 35,
                  width: 300,
                  height: 35,
                  fontSize: 15,
                }}
              >
                Button
              </Button>
            </Box>
          </MenuList>
        </Paper>
      </Box>
    </div>
  );
}
