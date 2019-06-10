export interface IGuideProviderCoverageArea {
  RegionName: string;
  FullName: string;
  PostalCode: string;
  PostalCodeExample: string;
  ShortName: string;
  OnePostalCode: boolean;
}

export interface IGuideProviderAvailableLineup {
  Location: string;
  Transport: string;
  Name: string;
  ProviderID: string;
}
