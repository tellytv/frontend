import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';

export interface GuideSource {
  ID: number;
  Name: string;
  Provider: string;
  Username: string;
  Password: string;
  URL: string;
  ImportedAt: Date;
  Channels: GuideSourceChannel[];
}
