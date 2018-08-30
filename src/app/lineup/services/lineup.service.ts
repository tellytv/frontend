import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateLineup, Lineup, LineupChannel } from '@app/lineup/models';


@Injectable({
  providedIn: 'root'
})
export class LineupService {
  url = `${environment.url}/api/lineups`;

  constructor(
    private http: HttpClient
  ) { }

  createLineup(lineup: CreateLineup): Observable<Lineup> {
    return this.http.post<Lineup>(`${this.url}`, lineup);
  }

  getLineup(lineupID: number): Observable<Lineup> {
    return this.http.get<Lineup>(`${this.url}/${lineupID}`).pipe(
      map((lineup: Lineup) => {
        lineup.Channels.sort((a: LineupChannel, b: LineupChannel) => {
          return parseInt(a.ChannelNumber, 10) < parseInt(b.ChannelNumber, 10) ? -1 : 1;
        });
        return lineup;
      })
    );
  }

  getLineupChannels(lineupID: number): Observable<LineupChannel[]> {
    return this.http.get<LineupChannel[]>(`${this.url}/${lineupID}/channels`);
  }

  getLineups(): Observable<Lineup[]> {
    return this.http.get<Lineup[]>(this.url).pipe(
      map((lineups: Lineup[]) => {
        for (const lineup of lineups) {
          if (!lineup.Channels) {
            continue;
          }
          lineup.Channels.sort((a: LineupChannel, b: LineupChannel) => {
            return parseInt(a.ChannelNumber, 10) < parseInt(b.ChannelNumber, 10) ? -1 : 1;
          });
        }
        return lineups;
      })
    );
  }

  updateLineupChannels(lineupID: number, channels: LineupChannel[]): Observable<Lineup> {
    return this.http.put<Lineup>(`${this.url}/${lineupID}/channels`, channels);
  }

  refreshLineup(lineupID: number): Observable<object> {
    return this.http.put(`${this.url}/${lineupID}/refresh`, null);
  }
}
