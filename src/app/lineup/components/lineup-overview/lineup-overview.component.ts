import { Component, OnInit } from '@angular/core';

import { LineupService } from '@app/lineup/services/lineup.service';
import { Lineup } from '@app/lineup/models/lineup.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lineup-overview',
  templateUrl: './lineup-overview.component.html',
  styleUrls: ['./lineup-overview.component.scss']
})
export class LineupOverviewComponent implements OnInit {
  lineups$: Observable<Lineup[]>;

  constructor(
    private lineupService: LineupService
  ) { }

  ngOnInit(): void {
    this.lineups$ = this.lineupService.getLineups();
  }

}
