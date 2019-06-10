import { IGuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';
import { IVideoSourceTrack } from '@app/lineup/models/video-source-track.model';

export interface ILineupChannel {
  LineupID?: number;
  Title: string;
  ChannelNumber: string;
  LockChannelNumber: boolean;
  VideoTrackID?: number;
  GuideChannelID?: number;
  HD: boolean;
  Favorite: boolean;
  CreatedAt: Date;

  VideoTrack?: IVideoSourceTrack;
  GuideChannel?: IGuideSourceChannel;
  HDHR?: any;
}
