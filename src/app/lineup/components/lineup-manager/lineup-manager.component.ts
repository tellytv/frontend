import { Component, OnDestroy, OnInit } from '@angular/core';

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
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lineup-manager',
  templateUrl: './lineup-manager.component.html',
  styleUrls: ['./lineup-manager.component.scss']
})
export class LineupManagerComponent implements OnInit, OnDestroy {
  DRAGULA_NAME = 'LINES';

  lineup$: Observable<Lineup>;
  guideChannels$: Observable<GuideSourceChannel[]>;
  videoTracks$: Observable<VideoSourceTrack[]>;
  newLineupChannel: Observable<LineupChannel> = new Observable<LineupChannel>();

  lineup: Lineup;

  editingChannel: LineupChannel;

  subs = new Subscription();

  constructor(
    private lineupService: LineupService,
    private guideSourceService: GuideSourceService,
    private videoSourceService: VideoSourceService,
    private dragulaService: DragulaService
  ) { }

  ngOnInit(): void {
    this.lineup$ = this.lineupService.getLineup(1);
    this.guideChannels$ = this.guideSourceService.getAllChannels();
    this.videoTracks$ = this.videoSourceService.getAllTracks();

    this.lineup$.subscribe((lineup) => {
      this.lineup = lineup;
    });

    this.subs.add(this.dragulaService.drop(this.DRAGULA_NAME).subscribe(() => {
      this.updateChannelNumbers(this.lineup.Channels);
      this.updateChannelNumbers(this.lineup.DisabledChannels);
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  addChannelToLineup(): void {
    // TODO: Add channel
    this.newLineupChannel = null;
  }

  updateChannelNumbers(channels: LineupChannel[]): void {
    for (let i = 0; i < channels.length; i++) {
      const channelNumber = i + 1;
      channels[i].ChannelNumber = `${channelNumber}`;
    }
  }

}
