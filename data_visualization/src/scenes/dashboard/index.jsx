import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to my Dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
