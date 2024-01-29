import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Grid } from '@mui/material';

const OptionsDialog = ({ open, handleClose, options, handleOptionClick }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle sx={{ p: 2, fontSize: 25, color: '#757575' }}>
        <Grid container direction="row">
          <Grid item md={12} textAlign="center">
            Seleccione una opción
          </Grid>
        </Grid>
        <Grid item sx={{ mt: 2 }}>
          <Divider sx={{ border: '2px solid #36a9e1' }}></Divider>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <List sx={{ border: '1px solid #E0E0E0', borderRadius: 4 }}>
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleOptionClick(option)}>
              <ListItemText primary={option} sx={{ fontFamily: 'poppins regular', fontSize: 15, m: 1, p: 1 }} />
            </MenuItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default OptionsDialog;
