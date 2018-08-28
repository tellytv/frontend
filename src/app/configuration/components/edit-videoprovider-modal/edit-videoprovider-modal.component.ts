import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoProvider, CreateVideoProvider } from '@app/configuration/models';
import { VideoSource } from '@app/lineup/models';

@Component({
  selector: 'app-edit-videoprovider-modal',
  templateUrl: './edit-videoprovider-modal.component.html',
  styleUrls: ['./edit-videoprovider-modal.component.scss']
})
export class EditVideoproviderModalComponent {
  @Input() newProvider: boolean;
  @Input() provider: VideoSource | CreateVideoProvider;

  @Output() save = new EventEmitter<VideoSource>();
  @Output() create = new EventEmitter<CreateVideoProvider>();
  @Output() close = new EventEmitter<VideoSource | CreateVideoProvider>();
}
