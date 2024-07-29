import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AppBarWithTabs = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          A4 Schools
        </Typography>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab label="Base64 to File" component={Link} to="/base64-to-file" />
          <Tab label="Any File to Base64" component={Link} to="/file-to-base64" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWithTabs;
