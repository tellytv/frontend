import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICreateGuideProvider } from '@app/configuration/models';
import { IGuideSource } from '@app/lineup/models';

@Component({
  selector: 'app-edit-guideprovider-modal',
  templateUrl: './edit-guideprovider-modal.component.html',
  styleUrls: ['./edit-guideprovider-modal.component.scss'],
})
export class EditGuideProviderModalComponent {
  @Input() newProvider: boolean;
  @Input() provider: IGuideSource | ICreateGuideProvider;

  @Output() save = new EventEmitter<IGuideSource>();
  @Output() create = new EventEmitter<ICreateGuideProvider>();
  @Output() close = new EventEmitter<IGuideSource | ICreateGuideProvider>();
}
