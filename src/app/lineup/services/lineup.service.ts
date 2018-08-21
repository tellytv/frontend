import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment';
import { Observable } from 'rxjs';
import { Line } from '@app/lineup/models/line.model';


@Injectable({
  providedIn: 'root'
})
export class LineupService {
  url = `${environment.url}/lineup.json`;

  constructor(
    private http: HttpClient
  ) { }

  getLineup(): Observable<Line[]> {
    return this.http.get<Line[]>(this.url);
  }
}
