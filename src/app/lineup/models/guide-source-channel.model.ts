import { XMLTVChannel } from '@app/lineup/models/xmltv.model';

export interface GuideSourceChannel {
  ID: number;
  GuideID: number;
  XMLTVID: string;
  Data: XMLTVChannel;
  ImportedAt: Date;
  GuideSourceName: string;
  IconSource?: string;
}
