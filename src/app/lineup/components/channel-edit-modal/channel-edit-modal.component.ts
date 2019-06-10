import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGuideSourceChannel, ILineupChannel, IVideoSource, IVideoSourceTrack } from '@app/lineup/models/';

@Component({
  selector: 'app-channel-edit-modal',
  templateUrl: './channel-edit-modal.component.html',
  styleUrls: ['./channel-edit-modal.component.scss'],
})
export class ChannelEditModalComponent {
  @Input() newChannel: boolean;
  @Input() channel: ILineupChannel;
  @Input() videoTracks: IVideoSourceTrack[];
  @Input() guideChannels: IGuideSourceChannel[];

  @Output() save = new EventEmitter<ILineupChannel>();
  @Output() close = new EventEmitter<ILineupChannel>();

  videoTrackGroupBy(item: IVideoSourceTrack): string {
    return `${item.VideoSourceName} -> ${item.Category}`;
  }

  guideChannelGroupBy(item: IGuideSourceChannel): string {
    return `${item.GuideSourceName} -> ${item.Data.Lineup}`;
  }

  searchVideoTracks(search: string, item: any): boolean {
    return (item.VideoSourceName + ' ' + item.Category + ' ' + item.Name + ' ' + item.EPGID).toLowerCase().includes(search.toLowerCase());
  }

  searchGuideChannels(search: string, item: any): boolean {
    return (item.GuideSourceName + item.Data.Name + ' ' + item.XMLTVID).toLowerCase().includes(search.toLowerCase());
  }

  handleSelectVideoTrack(event: IVideoSourceTrack): void {
    if (!this.channel.Title || this.channel.Title !== '') {
      this.channel.Title = event.Name;
    }

    if (event.Name.indexOf('HD') !== -1) {
      this.channel.HD = true;
    }
  }

  addChannel(): void {
    this.save.emit();
  }

  closeEditChannel(): void {
    this.close.emit(this.channel);
  }
}
