import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Grid, Menu, MenuItem } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LinearProgress } from '@mui/material';
//import icon
import { IconBrandWhatsapp, IconChevronDown } from '@tabler/icons';
//asset
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';
//theme
import { useTheme } from '@mui/material/styles';
//tabla
import TablaWhatsapp from './table-whatsapp';

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Card sx={{ border: `1px solid ${theme.palette.grey[300]}`, maxWidth: expanded ? 1000 : 365 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            <IconBrandWhatsapp style={{ color: 'white' }} />
          </Avatar>
        }
        action={
          <>
            <Avatar
              variant="circular"
              sx={{
                cursor: 'pointer',
                backgroundColor: theme.palette.success.dark,
                color: theme.palette.grey[200],
                padding: '8px',
                marginRight: '5px',
                zIndex: 1
              }}
              aria-controls="menu-earning-card"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon fontSize="inherit" />
            </Avatar>
            <Menu
              id="menu-earning-card"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              variant="selectedMenu"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem onClick={handleClose}>
                <GetAppTwoToneIcon sx={{ mr: 1.75 }} /> Import Card
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Data
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <PictureAsPdfTwoToneIcon sx={{ mr: 1.75 }} /> Export
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ArchiveTwoToneIcon sx={{ mr: 1.75 }} /> Archive File
              </MenuItem>
            </Menu>
          </>
        }
        title="Cobro Mensual"
        subheader=""
      />

      <CardContent>
        <Typography align="center" variant="h2" color="text.secondary">
          49,43%
        </Typography>
        <Grid style={{ alignItems: 'center', margin: 8 }}>
          <Grid item>
            <LinearProgress variant="determinate" value={(49, 43)} style={{ height: 15, align: 'center', maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <Avatar variant="circular" sx={{ backgroundColor: theme.palette.success.dark, color: theme.palette.grey[200] }}>
            <IconChevronDown fontSize="inherit" />
          </Avatar>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid>
            <TablaWhatsapp />
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
