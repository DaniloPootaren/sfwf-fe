import React from 'react';
import { Grid } from '@mui/material';
import SchemeCard from '../../components/schemeCard';

const Schemes = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SchemeCard />
      </Grid>
      {/* Repeat the pattern for the remaining cards */}
      {/* Add more Grid items and SchemeCard components as needed */}
    </Grid>
  );
};

export default Schemes;
