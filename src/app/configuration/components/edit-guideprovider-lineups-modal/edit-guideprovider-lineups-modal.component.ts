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
  selectedRegion: GuideProviderCoverageArea;
  selectedRegionName: string;
  selectedLineupID: string;
  selectedLineup: GuideProviderAvailableLineup;
  postalCode: string;

  @Input()
  set provider(provider: GuideSource) {
    if (provider) {
      this.guideProvider = provider;
      this.coverageAreas$ = this.configService.getGuideProviderCoverage(provider.ID);
    }
  }

  @Output() close = new EventEmitter();

  constructor(private configService: ConfigurationService) { }

  regionChanged($event: GuideProviderCoverageArea): void {
    this.selectedRegion = $event;
    if (this.selectedRegion && this.selectedRegion.OnePostalCode === false) {
      this.lineupCandidates$ = this.configService.getGuideProviderLineups(this.guideProvider.ID, this.selectedRegion.ShortName,
                                                                          this.selectedRegion.PostalCode);
    }
  }

  postalCodeChanged(): void {
    this.lineupCandidates$ = this.configService.getGuideProviderLineups(this.guideProvider.ID, this.selectedRegion.ShortName,
                                                                        this.postalCode);
  }

  lineupChanged($event: GuideProviderAvailableLineup): void {
    this.selectedLineup = $event;
  }

  addLineup(): void {
    this.configService.addGuideProviderLineup(this.guideProvider.ID,
                                              this.selectedLineupID).subscribe((provider: GuideProviderAvailableLineup) => {
      this.guideProvider.ProviderData.lineups.push({name: this.selectedLineup.Name, lineup: this.selectedLineup.ProviderID});
      this.coverageAreas$ = undefined;
      this.lineupCandidates$ = undefined;
      this.selectedLineupID = undefined;
      this.selectedRegion = undefined;
      this.postalCode = undefined;
      this.selectedLineup = undefined;
      this.selectedRegionName = undefined;
    });
  }

  closeLineupsModal(): void {
    console.log('CLOSE', this.guideProvider);
    console.log('this.close', this.close)
    this.close.emit(null);
  }
}
