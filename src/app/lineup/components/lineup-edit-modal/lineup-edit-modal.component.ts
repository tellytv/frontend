import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ICreateLineup, ILineup } from '@app/lineup/models';

@Component({
  selector: 'app-lineup-edit-modal',
  templateUrl: './lineup-edit-modal.component.html',
  styleUrls: ['./lineup-edit-modal.component.scss'],
})
export class LineupEditModalComponent implements OnChanges {
  @Input() lineup: ILineup|ICreateLineup;
  @Input() newLineup: boolean;

  @Output() create = new EventEmitter<ICreateLineup>();
  @Output() close = new EventEmitter<void>();

  ngOnChanges(): void {
    if (this.newLineup) {
      this.lineup = {
        Name: '',
      } as ICreateLineup;
    }
  }

  createLineup(): void {
    this.create.emit(this.lineup);
  }

  closeEditLineup(): void {
    this.lineup = undefined;
    this.close.emit();
  }

}
