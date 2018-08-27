import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environment';

import { GuideSource, VideoSource } from '@app/lineup/models';
import { CreateGuideProvider, CreateVideoProvider } from '@app/configuration/models';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  url = `${environment.url}/api`;

  constructor(
    private http: HttpClient
  ) { }

  createGuideProvider(provider: CreateGuideProvider): Observable<GuideSource> {
    return this.http.post<GuideSource>(`${this.url}`, provider);
  }

  createVideoProvider(provider: CreateVideoProvider): Observable<VideoSource> {
    return this.http.post<VideoSource>(`${this.url}`, provider);
  }
}
