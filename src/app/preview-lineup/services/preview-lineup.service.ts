import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IGuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PreviewLineupService {
  constructor(
    private http: HttpClient,
  ) { }

  getLineupPreview(providerID: number, lineupID: Observable<string>): Observable<IGuideSourceChannel[]> {
    return this.http.get<IGuideSourceChannel[]>(`${environment.url}/api/guide_source/${providerID}/lineups/${lineupID}/channels`);
  }
}
