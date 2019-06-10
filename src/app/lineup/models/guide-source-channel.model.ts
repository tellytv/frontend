import { IXMLTVChannel } from '@app/lineup/models/xmltv.model';

export interface IGuideSourceChannel {
  ID: number;
  GuideID: number;
  XMLTVID: string;
  Data: IXMLTVChannel;
  ImportedAt: Date;
  GuideSourceName: string;
  IconSource?: string;
}
