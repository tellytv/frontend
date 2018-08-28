import { VideoSourceTrack } from '@app/lineup/models/video-source-track.model';

export interface VideoSource {
  ID: number;
  Name: string;
  Provider: string;
  Username: string;
  Password: string;
  M3UURL: string;
  MaxStreams: number;
  ImportedAt: Date;
  Tracks: VideoSourceTrack[];
}
