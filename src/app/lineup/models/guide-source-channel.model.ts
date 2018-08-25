export interface GuideSourceChannel {
  ID: number;
  GuideID: number;
  XMLTVID: string;
  Data: XMLTVChannel;
  ImportedAt: Date;
  GuideSourceName: string;
  PrettyDisplayName: string;
  IconSource?: string;
}

export interface XMLTVChannel {
  displayNames: XMLTVCommonElement[];
  urls: XMLTVCommonElement[];
  icons: XMLTVIcon[];
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
