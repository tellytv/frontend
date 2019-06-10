import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IGuideSourceChannel } from '@app/lineup/models/guide-source-channel.model';
import { PreviewLineupService } from '@app/preview-lineup/services/preview-lineup.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest, map, merge, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-preview-guideprovider-lineup',
  templateUrl: './preview-guideprovider-lineup.component.html',
  styleUrls: ['./preview-guideprovider-lineup.component.scss'],
})
export class PreviewGuideProviderLineupComponent implements OnInit {

  channels$: Observable<IGuideSourceChannel[]>;

  constructor(
    private previewLineupService: PreviewLineupService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.channels$ = this.previewLineupService.getLineupPreview(parseInt(params['guideProviderId'], 10), params['lineupId']);
    });
  }

}
