import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGuideProviderAvailableLineup, IGuideProviderCoverageArea } from '@app/configuration/models';
import { ConfigurationService } from '@app/configuration/services/configuration.service';
import { IGuideSource } from '@app/lineup/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-guideprovider-lineups-modal',
  templateUrl: './edit-guideprovider-lineups-modal.component.html',
  styleUrls: ['./edit-guideprovider-lineups-modal.component.scss'],
})
export class EditGuideProviderLineupsModalComponent {
  guideProvider: IGuideSource;
  coverageAreas$: Observable<IGuideProviderCoverageArea[]>;
  lineupCandidates$: Observable<IGuideProviderAvailableLineup[]>;
  selectedRegion: IGuideProviderCoverageArea;
  selectedRegionName: string;
  selectedLineupID: string;
  selectedLineup: IGuideProviderAvailableLineup;
  postalCode: string;

  @Input()
  set provider(provider: IGuideSource) {
    if (provider) {
      this.guideProvider = provider;
      this.coverageAreas$ = this.configService.getGuideProviderCoverage(provider.ID);
    }
  }

  @Output() close = new EventEmitter();

  constructor(private configService: ConfigurationService) { }

  regionChanged($event: IGuideProviderCoverageArea): void {
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

  lineupChanged($event: IGuideProviderAvailableLineup): void {
    this.selectedLineup = $event;
  }

  addLineup(): void {
    this.configService.addGuideProviderLineup(this.guideProvider.ID,
                                              this.selectedLineupID).subscribe((provider: IGuideProviderAvailableLineup) => {
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
    this.close.emit(null);
  }
}
