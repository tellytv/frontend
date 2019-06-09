import { Component, Input } from '@angular/core';
import { ICreateVideoProvider, VideoProvider } from '@app/configuration/models';
import { ConfigurationService } from '@app/configuration/services/configuration.service';
import { IVideoSource } from '@app/lineup/models';

@Component({
  selector: 'app-configuration-videoprovider',
  templateUrl: './configuration-videoprovider.component.html',
  styleUrls: ['./configuration-videoprovider.component.scss'],
})
export class ConfigurationVideoProviderComponent {
  @Input() providers: IVideoSource[];

  addingProvider = false;
  editingProvider: IVideoSource | ICreateVideoProvider;

  constructor(private configService: ConfigurationService) {
  }

  addProvider(): void {
    this.addingProvider = true;
    this.editingProvider = {
      Name: '',
      Provider: VideoProvider.Xtream,
    } as ICreateVideoProvider;
  }

  closeModal(): void {
    delete this.editingProvider;
    this.addingProvider = false;
  }

  createProvider(): void {
    this.configService.createVideoProvider(this.editingProvider as ICreateVideoProvider).subscribe((provider: IVideoSource) => {
      this.providers.push(provider);
    });
    this.closeModal();
  }

  saveProvider(): void {
    this.configService.saveVideoProvider(this.editingProvider as IVideoSource).subscribe();
    this.closeModal();
  }
