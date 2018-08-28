import { Component, Input } from '@angular/core';
import { VideoSource } from '@app/lineup/models';
import { ConfigurationService } from '@app/configuration/services/configuration.service';
import { CreateVideoProvider, VideoProvider } from '@app/configuration/models';

@Component({
  selector: 'app-configuration-videoprovider',
  templateUrl: './configuration-videoprovider.component.html',
  styleUrls: ['./configuration-videoprovider.component.scss']
})
export class ConfigurationVideoproviderComponent {
  @Input() providers: VideoSource[];

  addingProvider = false;
  editingProvider: VideoSource | CreateVideoProvider;

  constructor(private configService: ConfigurationService) {
  }


  addProvider(): void {
    this.addingProvider = true;
    this.editingProvider = <CreateVideoProvider>{
      Name: '',
      Provider: VideoProvider.Xtream
    };
  }

  closeModal(): void {
    delete this.editingProvider;
    this.addingProvider = false;
  }

  createProvider(): void {
    this.configService.createVideoProvider(<CreateVideoProvider>this.editingProvider).subscribe((provider: VideoSource) => {
      this.providers.push(provider);
    });
    this.closeModal();
  }
}
