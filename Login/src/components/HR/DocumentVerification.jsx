import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DocumentVerification = () => {
  // Dummy state to show zero documents for now
  const [documents] = useState([]);

  return (
    <Box sx={{ p: 5, maxWidth: 900, mx: "auto" }}> {/* Keep width same for both summary & table */}
      <Typography variant="h4" gutterBottom textAlign="center">
        Document Verification
      </Typography>

      {/* Summary Section (Width Same as Table) */}
      <Paper sx={{ p: 4, mb: 4, width: "100%", textAlign: "center" }}> 
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>Summary</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", px: 5 }}>
          <Typography variant="h6">Total Documents: <b>0</b></Typography>
          <Typography variant="h6">Pending: <b>0</b></Typography>
          <Typography variant="h6">Approved: <b>0</b></Typography>
          <Typography variant="h6">Rejected: <b>0</b></Typography>
        </Box>
      </Paper>

      {/* Table for Document List (Width Same as Summary) */}
      <TableContainer component={Paper} sx={{ width: "100%", p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
          Uploaded Documents
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>Employee Name</TableCell>
              <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>Document Type</TableCell>
              <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>Upload Date</TableCell>
              <TableCell sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ fontSize: "1.1rem", py: 3 }}>
                  No documents uploaded yet.
                </TableCell>
              </TableRow>
            ) : (
              documents.map((doc, index) => (
                <TableRow key={index}>
                  <TableCell>{doc.employeeName}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell sx={{ paddingLeft: "10px" }}>{doc.status}</TableCell> {/* Added spacing */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DocumentVerification;
