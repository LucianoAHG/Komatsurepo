import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TablaScript() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Files" value="1" />
            <Tab label="Plots" value="2" />
            <Tab label="Packeges" value="3" />
            <Tab label="Help" value="4" />
            <Tab label="Viewer" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">Files</TabPanel>
        <TabPanel value="2">Plots</TabPanel>
        <TabPanel value="3">Packages</TabPanel>
        <TabPanel value="4">Help</TabPanel>
        <TabPanel value="5">Viewer</TabPanel>
      </TabContext>
    </Box>
  );
}
