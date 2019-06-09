import { Component, Input } from '@angular/core';
import { GuideProvider, ICreateGuideProvider } from '@app/configuration/models';
import { ConfigurationService } from '@app/configuration/services/configuration.service';
import { IGuideSource } from '@app/lineup/models';

@Component({
  selector: 'app-configuration-guideprovider',
  templateUrl: './configuration-guideprovider.component.html',
  styleUrls: ['./configuration-guideprovider.component.scss'],
})
export class ConfigurationGuideProviderComponent {
  @Input() providers: IGuideSource[];

  addingProvider = false;
  editLineups = false;
  editingProvider: IGuideSource | ICreateGuideProvider;
  editingProviderLineups: IGuideSource;

  constructor(
    private configService: ConfigurationService,
  ) {
  }

  addProvider(): void {
    this.addingProvider = true;
    this.editingProvider = {
      Name: '',
      Password: '',
      Provider: GuideProvider.SchedulesDirect,
      Username: '',
    } as ICreateGuideProvider;
  }

  closeModal(): void {
    delete this.editingProviderLineups;
    delete this.editingProvider;
    this.addingProvider = false;
  }

  createProvider(): void {
    this.configService.createGuideProvider(this.editingProvider as ICreateGuideProvider).subscribe((provider: IGuideSource) => {
      this.providers.push(provider);
    });
    this.closeModal();
  }
}
