/* eslint-disable camelcase */
interface ISpaceObjectsService {
  getSpaceObjects(): Promise<SpaceObjectsResponse>;
  getSpaceObjectByName(objectName: string): Promise<SpaceObject>;
}

interface SpaceObjectsResponse {
  count: number;
  data: SpaceObject[];
}

interface SpaceObject extends SummaryData, SpaceObjectsSummary {
  des: string; // DesignationObject
  diameter: string; // Diameter
  fullname: string; // Name
  h: string; // H
  id: string; // Id
  ip: string; // ImpactProbability
  last_obs: number; // LastObserved
  n_imp: number; // PotentialImpacts
  ps_cum: string; // PalermoScaleCum
  ps_max: string; // PalermoScaleMax
  range: string; // Range
  ts_max: string; // TorinoScale
  v_inf: string; // VelocityInfinity-
}

interface SummaryData {
  date: string;
  dist: string;
  width: string;
}

interface SpaceObjectsSummary {
  diameter: string;
  cdate: string; // ImpactComputedDate
  energy: string; // Energy
  first_obs: string; // FirstObservation
  ip: string; // ImpactEnergy
  mass: string; // Mass
  method: string; // Method
  nobs: string; // Observations
  v_imp: string; // VelocityImpact
  impactEstimatedDate: string;
  estimatedDistanceToEarth: string;
}

interface SpaceObjectSummaryResponse {
  count: number;
  data: SummaryData[];
  summary: SpaceObjectsSummary;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type {
  ISpaceObjectsService,
  SpaceObjectsSummary,
  SpaceObjectSummaryResponse,
  SpaceObject,
  SpaceObjectsResponse,
};
