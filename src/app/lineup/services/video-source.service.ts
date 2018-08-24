import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoSource } from '@app/lineup/models/video-source.model';
import { VideoSourceTrack } from '@app/lineup/models/video-source-track.model';


@Injectable({
  providedIn: 'root'
})
export class VideoSourceService {
  url = `${environment.url}/api/video_sources`;

  constructor(
    private http: HttpClient
  ) { }

  getVideoSources(): Observable<VideoSource[]> {
    return this.http.get<VideoSource[]>(this.url);
  }

  getAllTracks(): Observable<VideoSourceTrack[]> {
    return this.http.get<VideoSourceTrack[]>(`${this.url}/tracks`).pipe(map((trk) => this.mapTrack(trk) ));
  }

  mapTrack(allTracks: VideoSourceTrack[]): VideoSourceTrack[] {
    return allTracks.map((aTrack) => {
      if (aTrack.Tags && aTrack.Tags['tvg-logo']) {
        aTrack.IconSource = aTrack.Tags['tvg-logo'];
      }
      return aTrack;
    });
  }
}
