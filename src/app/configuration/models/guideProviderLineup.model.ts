export interface GuideProviderCoverageArea {
  RegionName: string;
  FullName: string;
  PostalCode: string;
  PostalCodeExample: string;
  ShortName: string;
  OnePostalCode: boolean;
}

export interface GuideProviderAvailableLineup {
  Location: string;
  Transport: string;
  Name: string;
  ProviderID: string;
}
