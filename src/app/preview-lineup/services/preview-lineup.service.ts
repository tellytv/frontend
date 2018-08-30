import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';


@Injectable({
  providedIn: 'root'
})
export class PreviewLineupService {
  constructor(
    private http: HttpClient
  ) { }

  getLineupPreview(providerID: number, lineupID: Observable<string>): Observable<GuideSourceChannel[]> {
    return this.http.get<GuideSourceChannel[]>(`${environment.url}/api/guide_source/${providerID}/lineups/${lineupID}/channels`);
  }
}
