import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IGuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';
import { IGuideSource } from '@app/lineup/models/guide-source.model';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GuideSourceService {
  url = `${environment.url}/api/guide_sources`;

  constructor(
    private http: HttpClient,
  ) { }

  getGuideSources(): Observable<IGuideSource[]> {
    return this.http.get<IGuideSource[]>(this.url);
  }

  getAllChannels(): Observable<IGuideSourceChannel[]> {
    return this.http.get<IGuideSourceChannel[]>(`${this.url}/channels`);
  }
}
