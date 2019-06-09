import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICreateLineup, ILineup, ILineupChannel } from '@app/lineup/models';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LineupService {
  url = `${environment.url}/api/lineups`;

  constructor(
    private http: HttpClient,
  ) { }

  createLineup(lineup: ICreateLineup): Observable<ILineup> {
    return this.http.post<ILineup>(`${this.url}`, lineup);
  }

  getLineup(lineupID: number): Observable<ILineup> {
    return this.http.get<ILineup>(`${this.url}/${lineupID}`).pipe(
      map((lineup: ILineup) => {
        lineup.Channels.sort((a: ILineupChannel, b: ILineupChannel) => {
          return parseInt(a.ChannelNumber, 10) < parseInt(b.ChannelNumber, 10) ? -1 : 1;
        });
        return lineup;
      }),
    );
  }

  getLineupChannels(lineupID: number): Observable<ILineupChannel[]> {
    return this.http.get<ILineupChannel[]>(`${this.url}/${lineupID}/channels`);
  }

  getLineups(): Observable<ILineup[]> {
    return this.http.get<ILineup[]>(this.url).pipe(
      map((lineups: ILineup[]) => {
        for (const lineup of lineups) {
          if (!lineup.Channels) {
            continue;
          }
          lineup.Channels.sort((a: ILineupChannel, b: ILineupChannel) => {
            return parseInt(a.ChannelNumber, 10) < parseInt(b.ChannelNumber, 10) ? -1 : 1;
          });
        }
        return lineups;
      }),
    );
  }

  updateLineupChannels(lineupID: number, channels: ILineupChannel[]): Observable<ILineup> {
    return this.http.put<ILineup>(`${this.url}/${lineupID}/channels`, channels);
  }

  refreshLineup(lineupID: number): Observable<object> {
    return this.http.put(`${this.url}/${lineupID}/refresh`, null);
  }
}
