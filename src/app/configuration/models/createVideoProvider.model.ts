export interface ICreateVideoProvider {
  Name: string;
  Provider: VideoProvider;

  // XTream
  BaseUrl?: string;
  Username?: string;
  Password?: string;

  // M3U
  M3UURL?: string;
  NameKey?: string;
  LogoKey?: string;
  CategoryKey?: string;
  EPGIDKey?: string;
}

export enum VideoProvider {
  Xtream = 'Xtream',
  M3U = 'M3U',
}
