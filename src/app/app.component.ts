import { Component } from '@angular/core';
import { AppLoaderService } from './services/app-loader.service';
import { AppTitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public AppLoaderService = AppLoaderService;
  public pageUrl: string;
  constructor(private appTitleService: AppTitleService) {
    this.appTitleService.init();
  }
}
