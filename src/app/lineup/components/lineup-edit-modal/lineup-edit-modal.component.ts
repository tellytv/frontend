import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Lineup, CreateLineup } from '@app/lineup/models';

@Component({
  selector: 'app-lineup-edit-modal',
  templateUrl: './lineup-edit-modal.component.html',
  styleUrls: ['./lineup-edit-modal.component.scss']
})
export class LineupEditModalComponent implements OnChanges {
  @Input() lineup: Lineup|CreateLineup;
  @Input() newLineup: boolean;

  @Output() create = new EventEmitter<CreateLineup>();
  @Output() close = new EventEmitter<void>();

  ngOnChanges(): void {
    if (this.newLineup) {
      this.lineup = <CreateLineup>{
        Name: ''
      };
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
