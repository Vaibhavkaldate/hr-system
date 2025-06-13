import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Paper,
  InputAdornment
} from '@mui/material';
import {
  Search,
  Phone,
  Email,
  AccessTime,
  Room,
  AttachFile
} from '@mui/icons-material';

const SupportHelp = () => {
  return (
    <Box p={3}>
      {/* Top Banner */}
      <Box
        sx={{
          backgroundColor: '#1565C0',
          borderRadius: 2,
          p: 4,
          mb: 4,
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Support & Help Center
        </Typography>
        <Typography variant="body1" gutterBottom>
          Find answers or chat with us.
        </Typography>
        <Box mt={2} maxWidth="500px" mx="auto">
          <TextField
            fullWidth
            placeholder="Search help topics..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: 'gray' }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: '25px',
                backgroundColor: 'white'
              }
            }}
          />
        </Box>
      </Box>

      {/* Support Ticket Form */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Raise a Support Ticket
        </Typography>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Full Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              label="Category"
              variant="outlined"
              defaultValue=""
            >
              <MenuItem value="General">General</MenuItem>
              <MenuItem value="Technical">Technical</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Subject" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={<AttachFile />}
              sx={{ mb: 1 }}
            >
              Attach File
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1565C0',
                '&:hover': {
                  backgroundColor: '#0d47a1'
                },
                borderRadius: '20px',
                px: 4
              }}
            >
              Submit Ticket
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Contact Options */}
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
            <Phone sx={{ color: '#1565C0' }} fontSize="large" />
            <Typography variant="h6">Phone</Typography>
            <Typography>02482-254777</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
            <Email sx={{ color: '#1565C0' }} fontSize="large" />
            <Typography variant="h6">Email</Typography>
            <Typography>support@mahycogrow.com</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
            <AccessTime sx={{ color: '#1565C0' }} fontSize="large" />
            <Typography variant="h6">Working Hours</Typography>
            <Typography>Mon-Sat: 9am - 6pm</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Address */}
      <Box mt={4} textAlign="center">
        <Room sx={{ color: '#1565C0' }} />
        <Typography variant="body1" mt={1}>
          Mahyco Private Limited Jalna – Aurangabad Road, At. Dawalwadi, Tq. Badnapur, P.O. Box - 76, Jalna-431203.
        </Typography>
      </Box>
    </Box>
  );
};

export default SupportHelp;
