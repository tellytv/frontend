export interface XMLTVProgramme {
  titles?: (XMLTVCommonElement)[] | null;
  secondaryTitles?: (XMLTVCommonElement)[] | null;
  descriptions?: (XMLTVCommonElement)[] | null;
  date: string;
  categories?: (XMLTVCommonElement)[] | null;
  episodeNums?: (EpisodeNumsEntity)[] | null;
  start: string;
  stop: string;
  channel: string;
  new?: boolean | null;
  icons?: (IconsEntity)[] | null;
}

export interface XMLTVChannel {
  displayNames?: (XMLTVCommonElement)[] | null;
  icons?: (IconsEntity)[] | null;
  urls?: (string)[] | null;
  id: string;

  Lineup?: string; // TODO: Check the naming
}

export interface XMLTVCommonElement {
  lang: string;
  value: string;
}

export interface EpisodeNumsEntity {
  system: string;
  value: string;
}

export interface IconsEntity {
  source: string;
  width?: number | null;
  height?: number | null;
}
