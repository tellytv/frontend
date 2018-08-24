import { Component, OnInit, Input } from '@angular/core';
import { Lineup } from '@app/lineup/models/lineup.model';
import { LineupChannel } from '@app/lineup/models/lineup-channel.model';
import { GuideSource } from '@app/lineup/models/guide-source.model';
import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';
import { VideoSource } from '@app/lineup/models/video-source.model';
import { VideoSourceTrack } from '@app/lineup/models/video-source-track.model';


@Component({
  selector: '[app-lineup-row]',
  templateUrl: './lineup-row.component.html',
  styleUrls: ['./lineup-row.component.scss']
})
export class LineupRowComponent implements OnInit {

  @Input() lineup: Lineup;
  @Input() videoTracks: VideoSourceTrack[];
  @Input() guideChannels: GuideSourceChannel[];
  @Input() channel: LineupChannel;

  constructor() { }

  ngOnInit() {}

  searchVideoTracks(term: string, item: VideoSourceTrack) {
    term = term.toLocaleLowerCase();
    return item.RawLine.toLocaleLowerCase().indexOf(term) > -1;
  }

  searchGuideChannels(term: string, item: GuideSourceChannel) {
    term = term.toLocaleLowerCase();
    var foundMatch = false;
    item.DisplayNames.forEach((displayName) => {
      if(displayName.value.toLocaleLowerCase().indexOf(term) > -1) {
        foundMatch = true;
      }
    });
    if(item.XMLTVID.toLocaleLowerCase().indexOf(term) > -1) {
      foundMatch = true;
    }
    return foundMatch;
  }

}
