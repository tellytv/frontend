export interface VideoSourceTrack {
  ID: number;
  VideoSourceID: number;
  Name: string;
  Tags: object;
  RawLine: string;
  StreamURL: string;
  HD: boolean;
  ImportedAt: Date;
  VideoSourceName: string;
  IconSource?: string;
}
