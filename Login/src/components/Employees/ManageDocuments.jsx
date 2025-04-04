import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const documentTypes = [
  "ID Proof",
  "Address Proof",
  "Employment Agreement",
  "Certifications",
  "Experience Letter",
  "Educational Certificates",
  "Payslips",
];

const ManageDocuments = () => {
  const [documentType, setDocumentType] = useState("");
  const [file, setFile] = useState(null);
  const [documents, setDocuments] = useState([]);

  // Handle document upload
  const handleUpload = () => {
    if (file && documentType) {
      setDocuments([
        ...documents,
        {
          id: documents.length + 1, // Unique ID
          name: file.name,
          type: documentType,
          status: "Pending",
        },
      ]);
      setFile(null);
      setDocumentType("");
    }
  };

  // Handle document deletion
  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  // Handle document replacement
  const handleReplace = (id, newFile) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === id ? { ...doc, name: newFile.name, status: "Pending" } : doc
      )
    );
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Manage Documents
      </Typography>

      {/* Upload Document Form */}
      <Paper sx={{ p: 4, mb: 4, backgroundColor: "#f5f5f5" }}>
        <Typography variant="h6" gutterBottom>
          Upload Document
        </Typography>

        <TextField
          select
          label="Select Document Type"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        >
          {documentTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          component="label"
          sx={{ display: "block", mb: 2 }}
          startIcon={<CloudUploadIcon />}
        >
          Choose File
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Button>

        {file && (
          <Typography variant="body1" sx={{ mb: 2 }}>
            Selected File: {file.name}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleUpload}
          disabled={!file || !documentType}
        >
          Upload
        </Button>
      </Paper>

      {/* Uploaded Documents Table */}
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Uploaded Documents
        </Typography>

        {documents.length === 0 ? (
          <Typography>No documents uploaded yet.</Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#1976d2" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                    Document Name
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                    Type
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>{doc.name}</TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell
                      sx={{
                        color:
                          doc.status === "Approved"
                            ? "green"
                            : doc.status === "Rejected"
                            ? "red"
                            : "orange",
                      }}
                    >
                      {doc.status}
                    </TableCell>
                    <TableCell>
                      {/* Replace Document */}
                      <Button
                        variant="outlined"
                        color="secondary"
                        component="label"
                        sx={{ mr: 1 }}
                      >
                        Replace
                        <input
                          type="file"
                          hidden
                          onChange={(e) => handleReplace(doc.id, e.target.files[0])}
                        />
                      </Button>

                      {/* Delete Document */}
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(doc.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
};

export default ManageDocuments;
