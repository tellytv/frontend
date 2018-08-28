import { Component, OnDestroy, OnInit } from '@angular/core';

import { GuideSourceService } from '@app/lineup/services/guide-source.service';
import { VideoSourceService } from '@app/lineup/services/video-source.service';
import { LineupService } from '@app/lineup/services/lineup.service';
import { Lineup } from '@app/lineup/models/lineup.model';
import { LineupChannel, GuideSourceChannel, VideoSourceTrack } from '@app/lineup/models';
import { Observable } from 'rxjs/internal/Observable';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { map, switchMap, share } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lineup-manager',
  templateUrl: './lineup-manager.component.html',
  styleUrls: ['./lineup-manager.component.scss']
})
export class LineupManagerComponent implements OnInit, OnDestroy {
  DRAGULA_NAME = 'LINES';

  lineupId$: Observable<number>;
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
    private dragulaService: DragulaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.lineupId$ = this.route.params.pipe(map((params) => parseInt(params['id'], 10)));

    this.lineup$ = this.lineupId$.pipe(
      switchMap((lineupId) => {
        return this.lineupService.getLineup(lineupId);
      }),
      share()
    );

    this.guideChannels$ = this.guideSourceService.getAllChannels();
    this.videoTracks$ = this.videoSourceService.getAllTracks();

    this.lineup$.subscribe((lineup) => {
      this.lineup = lineup;
    });

    this.subs.add(this.dragulaService.drop(this.DRAGULA_NAME).subscribe(() => {
      this.updateChannelNumbers(this.lineup.Channels);
    }));



  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  saveChannels(): void {
    // TODO: Add some fancy loaders to the page
    this.lineupService.updateLineupChannels(this.lineup.ID, this.lineup.Channels).subscribe((lineup) => this.lineup = lineup);
  }

  addChannel(): void {
    const channelNumber = this.lineup.Channels.length + 1;
    const newChannel: LineupChannel = {
      Title: '',
      ChannelNumber: `${channelNumber}`,
      LockChannelNumber: false,
      HD: false,
      Favorite: false,
      CreatedAt: new Date()
    };
    this.lineup.Channels.push(newChannel);
    this.editingChannel = newChannel;
  }

  updateChannelNumbers(channels: LineupChannel[]): void {
    let channelNumber = 1;
    for (let i = 0; i < channels.length; i++) {
      if (channels[i].LockChannelNumber) {
        continue;
      }
      channels[i].ChannelNumber = `${channelNumber}`;
      channelNumber++;
    }
  }

  removeChannel(channel: LineupChannel): void {
    const removeIndex = this.lineup.Channels.indexOf(channel);
    this.lineup.Channels.splice(removeIndex, 1);
  }

}
