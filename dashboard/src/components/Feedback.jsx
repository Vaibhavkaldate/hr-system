import React, { useState } from "react";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Rating,
  Button,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

const blueHeader = {
  color: "#0d47a1",
  fontWeight: "bold",
};

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const questions = [
    "Was the Delivery Process Smooth?",
    "Were Goods Delivered to Correct Location?",
    "Were All Items Received in Expected Quantity?",
    "Was the Product Handled Well?",
    "Were all necessary documents provided with the delivery?",
    "Was the Delivery Done on Time?",
    "Was the Packaging Adequate and Safe?",
    "Was Communication with Staff Easy and Helpful?",
    "Would You Recommend Us?",
  ];

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
        {/* Your Opinion Matters */}
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

        {/* Why We Collect Feedback */}
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

        {/* Submit Feedback Form Heading */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ ...blueHeader, mt: 3 }}>
            Submit Feedback Form
          </Typography>
        </Grid>

        {/* Feedback Form Section */}
        <Grid item xs={12}>
          <Card elevation={1} sx={{ backgroundColor: "#ffffff", p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Company Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Contact Person Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Contact Email / Phone" variant="outlined" />
              </Grid>

              {questions.map((q, index) => (
                <Grid item xs={12} key={index}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{`${index + 1}. ${q}`}</FormLabel>
                    <RadioGroup row name={`question${index + 1}`}>
                      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              ))}

              <Grid item xs={12}>
                <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                  Overall Satisfaction Rating
                </Typography>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => setRating(newValue)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Additional Comments"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0d47a1",
                    color: "#fff",
                    borderRadius: "20px",
                    px: 4,
                    "&:hover": { backgroundColor: "#1565c0" },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Feedback;
