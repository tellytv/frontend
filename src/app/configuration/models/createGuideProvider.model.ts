export interface CreateGuideProvider {
  Name: string;
  Provider: GuideProvider;
  Username: string;
  Password: string;
}

export enum GuideProvider {
  SchedulesDirect = 'SchedulesDirect'
}
