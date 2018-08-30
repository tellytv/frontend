import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environment';

import { GuideSource, VideoSource } from '@app/lineup/models';
import {
  CreateGuideProvider,
  CreateVideoProvider,
  GuideProviderCoverageArea,
  GuideProviderAvailableLineup
} from '@app/configuration/models';
import { GuideSourceService } from '@app/lineup/services/guide-source.service';
import { VideoSourceService } from '@app/lineup/services/video-source.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  url = `${environment.url}/api`;

  constructor(
    private http: HttpClient,
    private guideSourceService: GuideSourceService,
    private videoSourceService: VideoSourceService
  ) { }

  createGuideProvider(provider: CreateGuideProvider): Observable<GuideSource> {
    return this.http.post<GuideSource>(`${this.url}/guide_sources`, provider);
  }

  getGuideProviders(): Observable<GuideSource[]> {
    return this.guideSourceService.getGuideSources();
  }

  createVideoProvider(provider: CreateVideoProvider): Observable<VideoSource> {
    return this.http.post<VideoSource>(`${this.url}/video_sources`, provider);
  }

  getVideoProviders(): Observable<VideoSource[]> {
    return this.videoSourceService.getVideoSources();
  }

  getGuideProviderCoverage(providerID: number): Observable<GuideProviderCoverageArea[]> {
    return this.http.get<GuideProviderCoverageArea[]>(`${this.url}/guide_source/${providerID}/coverage`);
  }

  getGuideProviderLineups(providerID: number, countryCode: string, postalCode: string): Observable<GuideProviderAvailableLineup[]> {
    const lineupUrl = `${this.url}/guide_source/${providerID}/lineups?countryCode=${countryCode}&postalCode=${postalCode}`;
    return this.http.get<GuideProviderAvailableLineup[]>(lineupUrl);
  }

  addGuideProviderLineup(providerID: number, lineupID: string): Observable<Object> {
    return this.http.put<Object>(`${this.url}/guide_source/${providerID}/lineups/${lineupID}`, null);
  }

  deleteGuideProviderLineup(providerID: number, lineupID: string): Observable<Object> {
    return this.http.delete<Object>(`${this.url}/guide_source/${providerID}/lineups/${lineupID}`);
  }
}
