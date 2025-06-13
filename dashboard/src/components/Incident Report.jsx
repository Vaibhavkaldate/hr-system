import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
  Typography,
  Box
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const IncidentReport = () => {
  const [formData, setFormData] = useState({
    vehicleId: "",
    bookingId: "",
    incidentType: "",
    productId: "",
    productQuantity: "",
    dateDelivery: new Date(),
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateDelivery: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Incident Report Submitted:", formData);
    // Add your backend API logic here
  };

  const incidentTypes = ["On Delivery", "Return", "Damaged", "Delayed"];

  return (
    <Box p={3}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 900,
          mx: "auto",
          backgroundColor: "#ffffff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "#0D47A1" }}>
          Incident Report
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          General Info
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Vehicle ID"
                name="vehicleId"
                value={formData.vehicleId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Booking ID"
                name="bookingId"
                value={formData.bookingId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                fullWidth
                label="Incident Type"
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
              >
                {incidentTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Product ID"
                name="productId"
                value={formData.productId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Product Quantity"
                name="productQuantity"
                value={formData.productQuantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date Delivery"
                  value={formData.dateDelivery}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#0D47A1",
                  color: "white",
                  borderRadius: "20px",
                  px: 4,
                  "&:hover": {
                    backgroundColor: "#1565C0"
                  }
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default IncidentReport;
