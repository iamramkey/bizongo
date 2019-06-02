import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTING_PATHS } from '../../services/AppConstants';
import { AppContent } from '../shared/app-content.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {
  constructor(public appContent: AppContent, private router: Router) {
    if (
      !(this.appContent.gamesList instanceof Array) &&
      !(this.appContent.gamesListHeaders instanceof Array) &&
      !(this.appContent.selectedGame instanceof Object)
    ) {
      this.router.navigate([APP_ROUTING_PATHS.ROOT_PATH_URL]);
    }
  }

  navigateToGamesListPage() {
    this.router.navigate([APP_ROUTING_PATHS.ROOT_PATH_URL]);
  }
}
