export interface CreateVideoProvider {
  Name: string;
  Provider: VideoProvider;
  BaseUrl: string;
  Username: string;
  Password: string;
}

export enum VideoProvider {
  Xtream = 'Xtream',
  Vaders = 'Vaders'
}
