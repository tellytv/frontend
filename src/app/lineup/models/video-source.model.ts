import { IVideoSourceTrack } from '@app/lineup/models/video-source-track.model';

export interface IVideoSource {
  ID: number;
  Name: string;
  Provider: string;
  Username: string;
  Password: string;
  M3UURL: string;
  MaxStreams: number;
  ImportedAt: Date;
  Tracks: IVideoSourceTrack[];
}
