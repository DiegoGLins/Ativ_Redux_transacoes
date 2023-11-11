
import React from 'react';
import { Grid } from '@mui/material';
import Transactions from '../components/Transactions';

const Home: React.FC = () => {

  return (
    <Grid container>
      <Transactions />
    </Grid>
  );
};

export default Home;
