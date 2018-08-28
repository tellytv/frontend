import { VideoSourceTrack } from '@app/lineup/models/video-source-track.model';
import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';

export interface LineupChannel {
  LineupID?: number;
  Title: string;
  ChannelNumber: string;
  LockChannelNumber: boolean;
  VideoTrackID?: number;
  GuideChannelID?: number;
  HD: boolean;
  Favorite: boolean;
  CreatedAt: Date;

  VideoTrack?: VideoSourceTrack;
  GuideChannel?: GuideSourceChannel;
  HDHR?: any;
}
