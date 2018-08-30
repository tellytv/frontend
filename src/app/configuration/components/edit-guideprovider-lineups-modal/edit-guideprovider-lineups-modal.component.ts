import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from '@app/configuration/services/configuration.service';
import { GuideSource } from '@app/lineup/models';
import { GuideProviderCoverageArea, GuideProviderAvailableLineup } from '@app/configuration/models';

@Component({
  selector: 'app-edit-guideprovider-lineups-modal',
  templateUrl: './edit-guideprovider-lineups-modal.component.html',
  styleUrls: ['./edit-guideprovider-lineups-modal.component.scss']
})
export class EditGuideProviderLineupsModalComponent {
  guideProvider: GuideSource;
  coverageAreas$: Observable<GuideProviderCoverageArea[]>;
  lineupCandidates$: Observable<GuideProviderAvailableLineup[]>;
  selectedRegion$: GuideProviderCoverageArea;
  selectedLineupID$: string;
  postalCode: string;

  @Input()
  set provider(provider: GuideSource) {
    if (provider) {
      this.guideProvider = provider;
      this.coverageAreas$ = this.configService.getGuideProviderCoverage(provider.ID);
    }
  }

  constructor(private configService: ConfigurationService) { }

  @Output() save = new EventEmitter<GuideSource>();
  @Output() close = new EventEmitter<GuideSource>();

  regionChanged($event: GuideProviderCoverageArea): void {
    this.selectedRegion$ = $event;
    if (this.selectedRegion$.OnePostalCode === false) {
      this.lineupCandidates$ = this.configService.getGuideProviderLineups(this.guideProvider.ID, this.selectedRegion$.ShortName,
                                                                          this.selectedRegion$.PostalCode);
    }
  }

  postalCodeChanged(): void {
    this.lineupCandidates$ = this.configService.getGuideProviderLineups(this.guideProvider.ID, this.selectedRegion$.ShortName,
                                                                        this.postalCode);
  }

  addLineup(): void {
    this.configService.addGuideProviderLineup(this.guideProvider.ID, this.selectedLineupID$);
    this.coverageAreas$ = undefined;
    this.lineupCandidates$ = undefined;
    this.selectedLineupID$ = undefined;
    this.selectedRegion$ = undefined;
    this.postalCode = undefined;
  }
}
