import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { IGuideSourceChannel, ILineupChannel, IVideoSourceTrack } from '@app/lineup/models';
import { ILineup } from '@app/lineup/models/lineup.model';
import { GuideSourceService } from '@app/lineup/services/guide-source.service';
import { LineupService } from '@app/lineup/services/lineup.service';
import { VideoSourceService } from '@app/lineup/services/video-source.service';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lineup-manager',
  templateUrl: './lineup-manager.component.html',
  styleUrls: ['./lineup-manager.component.scss'],
})
export class LineupManagerComponent implements OnInit, OnDestroy {
  DRAGULA_NAME = 'LINES';

  lineupId$: Observable<number>;
  lineup$: Observable<ILineup>;
  guideChannels$: Observable<IGuideSourceChannel[]>;
  videoTracks$: Observable<IVideoSourceTrack[]>;
  newLineupChannel: Observable<ILineupChannel> = new Observable<ILineupChannel>();

  lineup: ILineup;

  addingChannel = false;
  editingChannel: ILineupChannel;

  subs = new Subscription();

  constructor(
    private lineupService: LineupService,
    private guideSourceService: GuideSourceService,
    private videoSourceService: VideoSourceService,
    private dragulaService: DragulaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.lineupId$ = this.route.params.pipe(map((params: Params) => parseInt(params['id'], 10)));

    this.lineup$ = this.lineupId$.pipe(
      switchMap((lineupId: number) => {
        return this.lineupService.getLineup(lineupId);
      }),
      share(),
    );

    this.guideChannels$ = this.guideSourceService.getAllChannels();
    this.videoTracks$ = this.videoSourceService.getAllTracks();

    this.lineup$.subscribe((lineup: ILineup) => {
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
    this.lineupService.updateLineupChannels(this.lineup.ID, this.lineup.Channels).subscribe((lineup: ILineup) => this.lineup = lineup);
  }

  closeModal(): void {
    this.addingChannel = false;
    delete this.editingChannel;
  }

  addChannel(): void {
    const channelNumber = this.lineup.Channels.length + 1;
    const newChannel: ILineupChannel = {
      Title: '',
      ChannelNumber: `${channelNumber}`,
      LockChannelNumber: false,
      HD: false,
      Favorite: false,
      CreatedAt: new Date(),
    };
    this.addingChannel = true;
    this.editingChannel = newChannel;
  }

  addNewChannel(): void {
    if (this.addingChannel) {
      this.lineup.Channels.push(this.editingChannel);
    }
    this.closeModal();
  }

  updateChannelNumbers(channels: ILineupChannel[]): void {
    let channelNumber = 1;
    for (const channel of channels) {
      if (channel.LockChannelNumber) {
        continue;
      }
      channel.ChannelNumber = `${channelNumber}`;
      channelNumber++;
    }
  }

  removeChannel(channel: ILineupChannel): void {
    const removeIndex = this.lineup.Channels.indexOf(channel);
    this.lineup.Channels.splice(removeIndex, 1);
  }

}
