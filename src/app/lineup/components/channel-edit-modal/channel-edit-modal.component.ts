import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GuideSourceChannel, LineupChannel, VideoSourceTrack } from '@app/lineup/models/';

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

  closeEditChannel(): void {
    this.close.emit(this.channel);
  }
}
