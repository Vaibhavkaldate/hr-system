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

const AboutUs = () => {
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
        About Us
      </Typography>

      <Grid container spacing={3}>
        {/* Who We Are */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={blueHeader}>
                Mahyco – Empowering Agriculture Through Innovation
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1" gutterBottom>
                Mahyco Private Limited is focused on research and development,
                production, processing, and marketing of seeds for India's
                farming fraternity. Founded in 1964, Mahyco is the pioneer of
                high-quality hybrid and open-pollinated seeds.
              </Typography>
              <Typography variant="body1">
                Through cutting-edge technology and intensive research, Mahyco
                has revolutionized the agricultural landscape of the country.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* What We Do */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={blueHeader}>
                What We Do
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                Mahyco’s founding vision is to change India’s agricultural face
                and help the country become self-sufficient in food production.
              </Typography>
              <Box mt={2}>
                <ul>
                  <li>Marketing Seeds</li>
                  <li>Tech Licensing</li>
                  <li>Tech Development</li>
                </ul>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Purpose of This Software */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={blueHeader}>
                Purpose of This Software
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                This logistics system streamlines seed transportation
                operations, vehicle tracking, driver assignment, and delivery
                performance—ensuring timely, efficient service for internal
                operations across all regions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Departments */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={blueHeader}>
                Departments Involved
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Box mt={1}>
                <ul>
                  <li>Logistics & Transport</li>
                  <li>Inventory & Dispatch</li>
                  <li>Admin & Management</li>
                  <li>Drivers</li>
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
                Internal Contact
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">📍 Mahyco Head Office</Typography>
              <Typography variant="body1">📞 1800-XXX-XXXX</Typography>
              <Typography variant="body1">✉️ support@mahyco.in</Typography>
              <Typography variant="body1">🕘 Mon–Sat, 9AM–6PM</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutUs;
