import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map, switchMap, share, combineLatest, merge } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { PreviewLineupService } from '@app/preview-lineup/services/preview-lineup.service';
import { GuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';

@Component({
  selector: 'app-preview-guideprovider-lineup',
  templateUrl: './preview-guideprovider-lineup.component.html',
  styleUrls: ['./preview-guideprovider-lineup.component.scss']
})
export class PreviewGuideproviderLineupComponent implements OnInit {

  channels$: Observable<GuideSourceChannel[]>;

  constructor(
    private previewLineupService: PreviewLineupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.channels$ = this.previewLineupService.getLineupPreview(parseInt(params['guideProviderId'], 10), params['lineupId']);
    });
  }

}
