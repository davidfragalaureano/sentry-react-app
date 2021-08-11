import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { EarthSpinProps } from './EarthSpinTypes';
import styles from './EarthSpin.module.css';

const EarthSpin = (props: EarthSpinProps): JSX.Element => {
  const {
    video,
    img: { src: imageSrc, width, height, text },
  } = props;

  return (
    <Grid
      container
      spacing={1}
      className={styles.EarthSpin}
      data-testid="EarthSpin"
    >
      <Grid item lg={12}>
        <video src={video} autoPlay loop muted />
      </Grid>
      <Typography className={styles.FloatRight} variant="h2" gutterBottom>
        {text}{' '}
        <img
          width={width}
          height={height}
          className={styles.FloatRight}
          src={imageSrc}
        ></img>
      </Typography>
    </Grid>
  );
};

export default EarthSpin;
