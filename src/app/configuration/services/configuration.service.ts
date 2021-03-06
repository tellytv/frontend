import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment';

import {
  ICreateGuideProvider,
  ICreateVideoProvider,
  IGuideProviderAvailableLineup,
  IGuideProviderCoverageArea,
} from '@app/configuration/models';
import { IGuideSource, IVideoSource } from '@app/lineup/models';
import { GuideSourceService } from '@app/lineup/services/guide-source.service';
import { VideoSourceService } from '@app/lineup/services/video-source.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  url = `${environment.url}/api`;

  constructor(
    private http: HttpClient,
    private guideSourceService: GuideSourceService,
    private videoSourceService: VideoSourceService,
  ) { }

  // Guide provider methods

  createGuideProvider(provider: ICreateGuideProvider): Observable<IGuideSource> {
    return this.http.post<IGuideSource>(`${this.url}/guide_sources`, provider);
  }

  saveGuideProvider(provider: IGuideSource): Observable<IGuideSource> {
    return this.http.put<IGuideSource>(`${this.url}/guide_sources/${provider.ID}`, provider);
  }

  deleteGuideProvider(provider: IGuideSource): Observable<{}> {
    return this.http.delete(`${this.url}/guide_sources/${provider.ID}`);
  }

  getGuideProviders(): Observable<IGuideSource[]> {
    return this.guideSourceService.getGuideSources();
  }

  // Video provider methods

  createVideoProvider(provider: ICreateVideoProvider): Observable<IVideoSource> {
    return this.http.post<IVideoSource>(`${this.url}/video_sources`, provider);
  }

  saveVideoProvider(provider: IVideoSource): Observable<IVideoSource> {
    return this.http.put<IVideoSource>(`${this.url}/video_sources/${provider.ID}`, provider);
  }

  deleteVideoProvider(provider: IVideoSource): Observable<{}> {
    return this.http.delete(`${this.url}/video_sources/${provider.ID}`);
  }

  getVideoProviders(): Observable<IVideoSource[]> {
    return this.videoSourceService.getVideoSources();
  }

  getGuideProviderCoverage(providerID: number): Observable<IGuideProviderCoverageArea[]> {
    return this.http.get<IGuideProviderCoverageArea[]>(`${this.url}/guide_source/${providerID}/coverage`);
  }

  getGuideProviderLineups(providerID: number, countryCode: string, postalCode: string): Observable<IGuideProviderAvailableLineup[]> {
    const lineupUrl = `${this.url}/guide_source/${providerID}/lineups?countryCode=${countryCode}&postalCode=${postalCode}`;
    return this.http.get<IGuideProviderAvailableLineup[]>(lineupUrl);
  }

  addGuideProviderLineup(providerID: number, lineupID: string): Observable<object> {
    return this.http.put<object>(`${this.url}/guide_source/${providerID}/lineups/${lineupID}`, null);
  }

  deleteGuideProviderLineup(providerID: number, lineupID: string): Observable<object> {
    return this.http.delete<object>(`${this.url}/guide_source/${providerID}/lineups/${lineupID}`);
  }
}
