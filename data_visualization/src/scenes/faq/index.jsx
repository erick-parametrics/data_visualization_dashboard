// This component will contain FAQ & instructions on how to use this dashboard.

import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 1...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 2...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 3...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 4...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 5...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 6...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 7...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ 8...
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>How to upload a new data sets?</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
