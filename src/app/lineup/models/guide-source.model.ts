import { IGuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';

export interface IGuideSource {
  ID: number;
  Name: string;
  Provider: string;
  Username: string;
  Password: string;
  URL: string;
  ImportedAt: Date;
  Channels: IGuideSourceChannel[];
  ProviderData: any;
}
