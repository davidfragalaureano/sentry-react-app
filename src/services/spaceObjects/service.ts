import { fetchJson } from '../../utils';
import { SENTRY_SERVER_URL } from '../../env/env';
import {
  ISpaceObjectsService,
  SpaceObjectsResponse,
  SpaceObjectSummaryResponse,
  SpaceObject,
} from './types';

class SpaceObjectsService implements ISpaceObjectsService {
  private sentryServerUrl: string;

  constructor(sentryServerUrl: string) {
    this.sentryServerUrl = sentryServerUrl;
    console.log(this.sentryServerUrl);
  }

  async getSpaceObjects(): Promise<SpaceObjectsResponse> {
    return fetchJson(`${this.sentryServerUrl}/spaceObjects`);
  }

  async getSpaceObjectByName(objectName: string): Promise<SpaceObject> {
    return fetchJson(`${this.sentryServerUrl}/spaceObjects/${objectName}`);
  }
}

export default new SpaceObjectsService(SENTRY_SERVER_URL);
