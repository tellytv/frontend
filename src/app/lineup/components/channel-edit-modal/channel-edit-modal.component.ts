import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GuideSourceChannel, LineupChannel, VideoSourceTrack, VideoSource } from '@app/lineup/models/';

@Component({
  selector: 'app-channel-edit-modal',
  templateUrl: './channel-edit-modal.component.html',
  styleUrls: ['./channel-edit-modal.component.scss']
})
export class ChannelEditModalComponent {
  @Input() channel: LineupChannel;
  @Input() videoTracks: VideoSourceTrack[];
  @Input() guideChannels: GuideSourceChannel[];

  @Output() save = new EventEmitter<LineupChannel>();
  @Output() close = new EventEmitter<LineupChannel>();

  videoTrackGroupBy(item: VideoSourceTrack): string {
    return `${item.VideoSourceName} -> ${item.Category}`;
  }

  guideChannelGroupBy(item: GuideSourceChannel): string {
    return `${item.GuideSourceName} -> ${item.Data.Lineup}`;
  }

  searchVideoTracks(search: string, item: any): boolean {
    return (item.VideoSourceName + ' ' + item.Category + ' ' + item.Name + ' ' + item.EPGID).toLowerCase().includes(search.toLowerCase());
  }

  searchGuideChannels(search: string, item: any): boolean {
    return (item.GuideSourceName + item.Data.Name + ' ' + item.XMLTVID).toLowerCase().includes(search.toLowerCase());
  }

  closeEditChannel(): void {
    this.close.emit(this.channel);
  }
}
