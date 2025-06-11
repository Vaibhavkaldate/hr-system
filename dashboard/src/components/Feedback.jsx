import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

const blueHeader = {
  color: "#0d47a1",
  fontWeight: "bold",
};

const Feedback = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        marginTop: "2rem",
        backgroundColor: "#f5fafd",
        borderRadius: "16px",
        maxWidth: "1000px",
        mx: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom sx={blueHeader}>
        Feedback
      </Typography>

      <Grid container spacing={3}>
        {/* Introduction */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={blueHeader}>
                Your Opinion Matters!
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1" gutterBottom>
                We value your feedback to help improve the quality of our services and user experience. Please share your suggestions, issues, or compliments regarding the logistics dashboard and overall system.
              </Typography>
              <Typography variant="body1">
                Every piece of feedback is read and taken into account by our team.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Why Feedback is Important */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={blueHeader}>
                Why We Collect Feedback
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                Feedback helps us to:
              </Typography>
              <Box mt={2}>
                <ul>
                  <li>Understand user needs and challenges</li>
                  <li>Improve system usability and performance</li>
                  <li>Introduce new features based on real use-cases</li>
                  <li>Ensure user satisfaction and reliability</li>
                </ul>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={blueHeader}>
                Reach Out to Us
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">📍 Mahyco Head Office</Typography>
              <Typography variant="body1">📞 1800-XXX-XXXX</Typography>
              <Typography variant="body1">✉️ feedback@mahyco.in</Typography>
              <Typography variant="body1">🕘 Mon–Sat, 9AM–6PM</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Feedback;
