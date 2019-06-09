export interface IXMLTVProgramme {
  titles?: IXMLTVCommonElement[] | null;
  secondaryTitles?: IXMLTVCommonElement[] | null;
  descriptions?: IXMLTVCommonElement[] | null;
  date: string;
  categories?: IXMLTVCommonElement[] | null;
  episodeNums?: IEpisodeNumsEntity[] | null;
  start: string;
  stop: string;
  channel: string;
  new?: boolean | null;
  icons?: IIconsEntity[] | null;
}

export interface IXMLTVChannel {
  displayNames?: IXMLTVCommonElement[] | null;
  icons?: IIconsEntity[] | null;
  urls?: string[] | null;
  id: string;

  Lineup?: string; // TODO: Check the naming
}

export interface IXMLTVCommonElement {
  lang: string;
  value: string;
}

export interface IEpisodeNumsEntity {
  system: string;
  value: string;
}

export interface IIconsEntity {
  source: string;
  width?: number | null;
  height?: number | null;
}
