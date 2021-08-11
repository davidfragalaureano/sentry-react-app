import { BigNumber } from 'bignumber.js';
import moment from 'moment';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const DISTANCE_FROM_EARTH_TO_ATMOSPHERE = 14.9;

const calculateDistanceFromEarth = (
  dateImpact: string,
  velocityImpact: string,
  velocityInfinity: string,
): { impactTime: string; distance: string } => {
  // units are km/s
  const [dateImpactParsed] = dateImpact.split('.');
  // calculate  given time & velocity
  const impactTime = new BigNumber(DISTANCE_FROM_EARTH_TO_ATMOSPHERE)
    .dividedBy(velocityImpact)
    .toString();
  // calculate distance given time & velocity
  const distanceInf = new BigNumber(velocityInfinity).times(
    moment(dateImpactParsed, 'YYYY-MM-DD').seconds(),
  );

  const distance = new BigNumber(distanceInf)
    .plus(DISTANCE_FROM_EARTH_TO_ATMOSPHERE)
    .toString();

  return { impactTime, distance };
};

const changeSign = (x: string): string => {
  const bigX = new BigNumber(x);
  return Math.random() > 0.5 ? bigX.toString() : bigX.times(-1).toString();
};

/**
 * Finds 'y' value given 'x' and the radius
 * x is picked as a random number.
 * @param r
 * @returns
 */
const solveCircleEquation = (
  r: string | number,
): { x: string; y: string; z: string } => {
  const x = new BigNumber(r).sqrt().times(Math.random()).toFixed(0).toString();
  const y = new BigNumber(r).minus(new BigNumber(x).pow(2)).sqrt().toString();
  const z = changeSign(new BigNumber(r).sqrt().times(Math.random()).toFixed(0));
  console.log(x);
  console.log(y);
  console.log(z);
  return { x, y, z };
};

export { calculateDistanceFromEarth, solveCircleEquation };
