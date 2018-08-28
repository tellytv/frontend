import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GuideSource, VideoSource } from '@app/lineup/models';
import { ConfigurationService } from '@app/configuration/services/configuration.service';

@Component({
  selector: 'app-configuration-overview',
  templateUrl: './configuration-overview.component.html',
  styleUrls: ['./configuration-overview.component.scss']
})
export class ConfigurationOverviewComponent implements OnInit {
  $guideProviders: Observable<GuideSource[]>;
  $videoProviders: Observable<VideoSource[]>;

  constructor(private configService: ConfigurationService) { }

  ngOnInit(): void {
    this.$guideProviders = this.configService.getGuideProviders();
    this.$videoProviders = this.configService.getVideoProviders();
  }

}
