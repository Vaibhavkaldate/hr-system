import React from "react";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const blueHeader = {
  color: "#0d47a1",
  fontWeight: "bold",
};

const Maintainance = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        marginTop: "2rem",
        backgroundColor: "#f5fafd",
        borderRadius: "16px",
        maxWidth: "800px",
        mx: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom sx={blueHeader}>
        Vehicle Maintenance Form
      </Typography>

      <Card elevation={1} sx={{ backgroundColor: "#ffffff", marginTop: "1rem" }}>
        <CardContent>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Vehicle ID"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Driver Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Maintenance Description"
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cost"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#0d47a1",
                    "&:hover": { backgroundColor: "#08306b" },
                  }}
                >
                  Submit Maintenance
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Maintainance;
