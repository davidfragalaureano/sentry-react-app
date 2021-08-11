import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import EarthSpin from '../../components/EarthSpin/EarthSpin';
import EarthImpactChart from '../../components/EarthImpactChart/EarthImpactChart';
import {
  SpaceObjectsService,
  SpaceObjectSummaryResponse,
} from '../../services/spaceObjects';
import EarthImpactChartProperties from '../../components/EarthImpactChart/types';

class Home extends React.Component<unknown, EarthImpactChartProperties> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      spaceObjects: [],
    };
  }

  private earthSpinConfig = {
    img: {
      src: './comet.png',
      width: '130',
      height: '130',
      text: 'Death is closer than you think',
    },
  };

  navLinks = [
    {
      text: 'Earth Impact Monitoring',
      href: '#earthImpactMonitoring',
    },
    {
      text: 'Space Objects',
      href: '#spaceObjects',
    },
    {
      text: 'Coming soon...',
      href: '#comming',
    },
  ];

  async componentDidMount(): Promise<void> {
    const { data = [] } = await SpaceObjectsService.getSpaceObjects();

    const spaceObjects = await Promise.all(
      data.slice(0, 8).map(({ des: objectName }) => {
        return SpaceObjectsService.getSpaceObjectByName(objectName);
      }),
    );

    this.setState({ spaceObjects });
  }

  render(): JSX.Element {
    return (
      <>
        <NavBar items={this.navLinks} />
        <EarthSpin
          video="./video/WorldSpinning.mp4"
          img={this.earthSpinConfig.img}
        ></EarthSpin>
        <EarthImpactChart spaceObjects={this.state.spaceObjects} />
      </>
    );
  }
}

export default Home;
