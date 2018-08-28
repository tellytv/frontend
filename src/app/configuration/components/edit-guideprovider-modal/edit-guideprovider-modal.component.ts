import { Component, Input, EventEmitter, Output } from '@angular/core';
import { GuideSource } from '@app/lineup/models';
import { CreateGuideProvider, GuideProvider } from '@app/configuration/models';

@Component({
  selector: 'app-edit-guideprovider-modal',
  templateUrl: './edit-guideprovider-modal.component.html',
  styleUrls: ['./edit-guideprovider-modal.component.scss']
})
export class EditGuideproviderModalComponent {
  @Input() newProvider: boolean;
  @Input() provider: GuideSource | CreateGuideProvider;

  @Output() save = new EventEmitter<GuideSource>();
  @Output() create = new EventEmitter<CreateGuideProvider>();
  @Output() close = new EventEmitter<GuideSource | CreateGuideProvider>();
}
