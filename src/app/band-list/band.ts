import { IVideo } from './video';

export interface IBand {
  bandName: string;
  path: string;
  videos: IVideo[];
}
