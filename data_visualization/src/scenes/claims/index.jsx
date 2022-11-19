import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataClaims } from "../../data/mockData";
import Header from "../../components/Header";

const Claims = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "policyId",
      headerName: "Policy ID",
      // flex: 1,
      // cellClassName: "name-columns--cell",
    },

    {
      field: "farmerName",
      headerName: "Farmer Name",
      flex: 1,
      cellClassName: "name-columns--cell",
    },
    {
      field: "township",
      headerName: "Township",
      flex: 1,
      // cellClassName: "name-columns--cell",
    },
    {
      field: "acreage",
      headerName: "Acreage",
      flex: 1,
    },
    {
      field: "claimAcre",
      headerName: "Claim Acre",
      flex: 1,
    },
    {
      field: "claimTotal",
      headerName: "Claim Total",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.claimTotal}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="CLAIMS" subtitle="List of Claims" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataClaims} columns={columns} />
      </Box>
    </Box>
  );
};

export default Claims;
