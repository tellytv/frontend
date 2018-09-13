import { Component, Input } from '@angular/core';
import { GuideSource } from '@app/lineup/models';
import { CreateGuideProvider, GuideProvider } from '@app/configuration/models';
import { ConfigurationService } from '@app/configuration/services/configuration.service';

@Component({
  selector: 'app-configuration-guideprovider',
  templateUrl: './configuration-guideprovider.component.html',
  styleUrls: ['./configuration-guideprovider.component.scss']
})
export class ConfigurationGuideproviderComponent {
  @Input() providers: GuideSource[];

  addingProvider = false;
  editLineups = false;
  editingProvider: GuideSource | CreateGuideProvider;
  editingProviderLineups: GuideSource;

  constructor(
    private configService: ConfigurationService
  ) {
  }

  addProvider(): void {
    this.addingProvider = true;
    this.editingProvider = <CreateGuideProvider>{
      Name: '',
      Password: '',
      Provider: GuideProvider.SchedulesDirect,
      Username: ''
    };
  }

  closeModal(): void {
    delete this.editingProviderLineups;
    delete this.editingProvider;
    this.addingProvider = false;
  }

  createProvider(): void {
    this.configService.createGuideProvider(<CreateGuideProvider>this.editingProvider).subscribe((provider: GuideSource) => {
      this.providers.push(provider);
    });
    this.closeModal();
  }
}
