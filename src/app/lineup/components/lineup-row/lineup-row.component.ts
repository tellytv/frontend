import { Component, Input } from '@angular/core';
import { Lineup } from '@app/lineup/models/lineup.model';
import { LineupChannel } from '@app/lineup/models/lineup-channel.model';
import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';
import { VideoSourceTrack } from '@app/lineup/models/video-source-track.model';


@Component({
  selector: 'app-lineup-row',
  templateUrl: './lineup-row.component.html',
  styleUrls: ['./lineup-row.component.scss']
})
export class LineupRowComponent {

  @Input() lineup: Lineup;
  @Input() videoTracks: VideoSourceTrack[];
  @Input() guideChannels: GuideSourceChannel[];
  @Input() channel: LineupChannel;

  constructor() { }

  searchVideoTracks(term: string, item: VideoSourceTrack): boolean {
    term = term.toLocaleLowerCase();
    return item.RawLine.toLocaleLowerCase().indexOf(term) > -1;
  }

  searchGuideChannels(term: string, item: GuideSourceChannel): boolean {
    term = term.toLocaleLowerCase();
    let foundMatch = false;
    item.DisplayNames.forEach((displayName) => {
      if (displayName.value.toLocaleLowerCase().indexOf(term) > -1) {
        foundMatch = true;
      }
    });
    if (item.XMLTVID.toLocaleLowerCase().indexOf(term) > -1) {
      foundMatch = true;
    }
    return foundMatch;
  }

}
