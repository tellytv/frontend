import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Lineup, CreateLineup } from '@app/lineup/models';
import { LineupService } from '@app/lineup/services/lineup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lineup-manager-overview',
  templateUrl: './lineup-manager-overview.component.html',
  styleUrls: ['./lineup-manager-overview.component.scss']
})
export class LineupManagerOverviewComponent implements OnInit {
  lineups$: Observable<Lineup[]>;

  addingLineup = false;
  editingLineup: Lineup;

  constructor(private lineupService: LineupService, private router: Router) { }

  ngOnInit(): void {
    this.lineups$ = this.lineupService.getLineups();
  }

  addLineup(): void {
    this.addingLineup = true;
  }

  editLineup(lineup: Lineup): void {
    this.editingLineup = lineup;
  }

  createLineup(lineup: CreateLineup): void {
    this.lineupService.createLineup(lineup).subscribe((newLineup: Lineup) => {
      this.router.navigate(['/lineup/manage/', newLineup.ID]);
    });
  }

  refreshLineup(lineupID: number): void {
    this.lineupService.refreshLineup(lineupID).subscribe();
  }
}
