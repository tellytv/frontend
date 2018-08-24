import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GuideSource } from '@app/lineup/models/guide-source.model';
import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';


@Injectable({
  providedIn: 'root'
})
export class GuideSourceService {
  url = `${environment.url}/api/guide_sources`;

  constructor(
    private http: HttpClient
  ) { }

  getGuideSources(): Observable<GuideSource[]> {
    return this.http.get<GuideSource[]>(this.url);
  }

  getAllChannels(): Observable<GuideSourceChannel[]> {
    return this.http.get<GuideSourceChannel[]>(`${this.url}/channels`).pipe(
            .map((res: Response) => {
              // This is needed for pretty output in ng-select
                return res.map((aChannel) => {
                  let joinedNames = aChannel.DisplayNames.map((displayName) => {
                    return `"${displayName.value}"`;
                  }).join(', ')
                  aChannel.PrettyDisplayNames = `${joinedNames} (<code>${aChannel.XMLTVID}</code>)`
                  if(aChannel.Icons && aChannel.Icons.length > 0) {
                    aChannel.IconSource = aChannel.Icons[0].source;
                  }
                  return aChannel;
                });

            })
          );
  }
}
