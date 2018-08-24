import { Component, OnInit } from '@angular/core';

import { GuideSourceService } from '@app/lineup/services/guide-source.service';
import { VideoSourceService } from '@app/lineup/services/video-source.service';
import { LineupService } from '@app/lineup/services/lineup.service';
import { Lineup } from '@app/lineup/models/lineup.model';
import { LineupChannel } from '@app/lineup/models/lineup-channel.model';
import { GuideSource } from '@app/lineup/models/guide-source.model';
import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';
import { VideoSource } from '@app/lineup/models/video-source.model';
import { VideoSourceTrack } from '@app/lineup/models/video-source-track.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lineup-manager',
  templateUrl: './lineup-manager.component.html',
  styleUrls: ['./lineup-manager.component.scss']
})
export class LineupManagerComponent implements OnInit {
  lineup$: Observable<Lineup>;
  guideChannels$: Observable<GuideSourceChannel[]>;
  videoTracks$: Observable<VideoSourceTrack[]>;
  newLineupChannel: Observable<LineupChannel> = new Observable<LineupChannel>();

  constructor(
    private lineupService: LineupService,
    private guideSourceService: GuideSourceService,
    private videoSourceService: VideoSourceService,
  ) { }

  ngOnInit() {
    this.lineup$ = this.lineupService.getLineup(1);
    this.guideChannels$ = this.guideSourceService.getAllChannels();
    this.videoTracks$ = this.videoSourceService.getAllTracks();
  }

  addChannelToLineup() {
    console.log('Add channel', this.newLineupChannel);
    this.newLineupChannel = null;
  }

}
