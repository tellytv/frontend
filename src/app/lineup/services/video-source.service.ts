import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IVideoSourceTrack } from '@app/lineup/models/video-source-track.model';
import { IVideoSource } from '@app/lineup/models/video-source.model';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VideoSourceService {
  url = `${environment.url}/api/video_sources`;

  constructor(
    private http: HttpClient,
  ) { }

  getVideoSources(): Observable<IVideoSource[]> {
    return this.http.get<IVideoSource[]>(this.url);
  }

  getAllTracks(): Observable<IVideoSourceTrack[]> {
    return this.http.get<IVideoSourceTrack[]>(`${this.url}/tracks`);
  }
}
