import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICreateVideoProvider } from '@app/configuration/models';
import { IVideoSource } from '@app/lineup/models';

@Component({
  selector: 'app-edit-videoprovider-modal',
  templateUrl: './edit-videoprovider-modal.component.html',
  styleUrls: ['./edit-videoprovider-modal.component.scss'],
})
export class EditVideoProviderModalComponent {
  @Input() newProvider: boolean;
  @Input() provider: IVideoSource | ICreateVideoProvider;

  @Output() save = new EventEmitter<IVideoSource>();
  @Output() create = new EventEmitter<ICreateVideoProvider>();
  @Output() close = new EventEmitter<IVideoSource | ICreateVideoProvider>();
}
