import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { ICreateLineup, ILineup } from '@app/lineup/models';
import { LineupService } from '@app/lineup/services/lineup.service';

@Component({
  selector: 'app-lineup-manager-overview',
  templateUrl: './lineup-manager-overview.component.html',
  styleUrls: ['./lineup-manager-overview.component.scss'],
})
export class LineupManagerOverviewComponent implements OnInit {
  lineups$: Observable<ILineup[]>;

  addingLineup = false;
  editingLineup: ILineup;

  constructor(private lineupService: LineupService, private router: Router) { }

  ngOnInit(): void {
    this.lineups$ = this.lineupService.getLineups();
  }

  addLineup(): void {
    this.addingLineup = true;
  }

  editLineup(lineup: ILineup): void {
    this.editingLineup = lineup;
  }

  createLineup(lineup: ICreateLineup): void {
    this.lineupService.createLineup(lineup).subscribe((newLineup: ILineup) => {
      this.router.navigate(['/lineup/manage/', newLineup.ID]);
    });
  }

  refreshLineup(lineupID: number): void {
    this.lineupService.refreshLineup(lineupID).subscribe();
  }
}
