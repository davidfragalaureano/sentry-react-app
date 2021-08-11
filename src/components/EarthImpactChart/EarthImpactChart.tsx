import React from 'react';
import Plot from 'react-plotly.js';
import { Grid } from '@material-ui/core';
import styles from './EarthImpactChart.module.css';
import { SpaceObject, SpaceObjectsSummary } from '../../services/spaceObjects';
import EarthImpactChartProperties from './types';
import { solveCircleEquation } from '../../services/spaceObjects/utils';

const DISTANCE_FROM_EARTH_TO_ATMOSPHERE = 14.9;

class EarthImpactChart extends React.Component<EarthImpactChartProperties> {
  spaceObjects: SpaceObjectsSummary[];

  constructor(props: EarthImpactChartProperties) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { spaceObjects } = props;
    this.spaceObjects = spaceObjects;
    this.createChartExample = this.createChartExample.bind(this);
  }

  setEarthLocation = (): Plotly.Data => ({
    type: 'scatter3d',
    mode: 'markers',
    x: [0],
    y: [0],
    z: [0],
    marker: {
      size: DISTANCE_FROM_EARTH_TO_ATMOSPHERE * 4,
      colorscale: 'Viridis',
    },
  });

  setGraphPoints(): Plotly.Data[] {
    // eslint-disable-next-line array-callback-return
    return this.spaceObjects.map(
      ({ estimatedDistanceToEarth, diameter: size = 1 }, i): Plotly.Data => {
        const { x, y, z } = solveCircleEquation(estimatedDistanceToEarth);

        console.log(size);
        console.log(x);
        console.log(y);
        console.log(z);

        return {
          type: 'scatter3d',
          mode: 'markers',
          showlegend: false,
          x: [x],
          y: [y],
          z: [z],
          opacity: 0.7,
          marker: {
            size: Number(size) * 80,
            sizemode: 'diameter',
            color: [i],
            colorscale: 'Viridis',
          },
        };
      },
    );
  }

  createChartExample(): JSX.Element {
    const spaceObjectsLocation = [
      this.setEarthLocation(),
      ...this.setGraphPoints(),
    ];

    return (
      <Plot
        data={spaceObjectsLocation}
        layout={{
          width: 1700,
          height: 1000,
          scene: {
            yaxis: {
              title: 'Distance from earth (km)',
            },
            xaxis: {
              title: 'Distance from earth (km)',
            },
            zaxis: {
              title: 'Distance from earth (km)',
            },
          },
          paper_bgcolor: '#ffffff',
          plot_bgcolor: '#ffffff',
          title: 'Objects near earth',
        }}
        config={{ responsive: true }}
      />
    );
  }

  render(): JSX.Element {
    return (
      <Grid
        container
        spacing={1}
        className={styles.EarthImpactChart}
        data-testid="EarthImpactChart"
      >
        <Grid container item lg={12} spacing={1}>
          {this.createChartExample()}
        </Grid>
      </Grid>
    );
  }
}

export default EarthImpactChart;
