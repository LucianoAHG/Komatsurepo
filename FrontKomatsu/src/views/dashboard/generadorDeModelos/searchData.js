import React from 'react';
import { Grid, Stack, Typography, IconButton, Tooltip, TextField, InputAdornment } from '@mui/material';

//import Theme
import { useTheme } from '@mui/material';
//Import Icons
import { IconStack2, IconCaretDown, IconSearch } from '@tabler/icons';

function SearchData({ margBotton }) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      mb={margBotton}
      sx={{ height: 50, width: '100%', border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 4 }}
      alignItems="center"
    >
      <Grid item>
        <IconButton>
          <IconStack2 />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography>Global Enviroment</Typography>
      </Grid>
      <Grid item>
        <Tooltip title="opciones">
          <IconButton>
            <IconCaretDown />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item sx={{ marginLeft: 'auto', mr: 1 }}>
        <TextField
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconSearch />
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Stack>
  );
}

export default SearchData;
