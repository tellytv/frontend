export interface ICreateGuideProvider {
  Name: string;
  Provider: GuideProvider;

  // SchedulesDirect
  Username?: string;
  Password?: string;

  // XMLTV
  XMLTV_URL?: string;
}

export enum GuideProvider {
  SchedulesDirect = 'SchedulesDirect',
  XMLTV = 'XMLTV',
}
