import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '@app/configuration/services/configuration.service';
import { IGuideSource, IVideoSource } from '@app/lineup/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-configuration-overview',
  templateUrl: './configuration-overview.component.html',
  styleUrls: ['./configuration-overview.component.scss'],
})
export class ConfigurationOverviewComponent implements OnInit {
  $guideProviders: Observable<IGuideSource[]>;
  $videoProviders: Observable<IVideoSource[]>;

  constructor(private configService: ConfigurationService) { }

  ngOnInit(): void {
    this.$guideProviders = this.configService.getGuideProviders();
    this.$videoProviders = this.configService.getVideoProviders();
  }

}
