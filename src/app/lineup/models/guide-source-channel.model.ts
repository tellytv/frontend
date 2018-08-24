export interface GuideSourceChannel {
  ID: number;
  GuideID: number;
  XMLTVID: string;
  DisplayNames: XMLTVCommonElement[];
  URLs: XMLTVCommonElement[];
  Icons: XMLTVIcon[];
  ChannelNumber: string;
  HD: boolean;
  ImportedAt: Date;
  GuideSourceName: string;
  PrettyDisplayName: string;
  IconSource?: string;
}

export interface XMLTVCommonElement {
  value: string;
  lang: string;
}

export interface XMLTVIcon {
  source: string;
  width: number;
  height: number;
}
