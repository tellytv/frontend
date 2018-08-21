import { Component, OnInit } from '@angular/core';

import { LineupService } from '@app/lineup/services/lineup.service';
import { Line } from '@app/lineup/models/line.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lineup-overview',
  templateUrl: './lineup-overview.component.html',
  styleUrls: ['./lineup-overview.component.scss']
})
export class LineupOverviewComponent implements OnInit {
  lineup$: Observable<Line[]>;

  constructor(
    private lineupService: LineupService
  ) { }

  ngOnInit() {
    this.lineup$ = this.lineupService.getLineup();
  }

}
