/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:42:23
 * @modify date 2019-06-03 00:42:23
 * @desc [description]
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';
import { GameDetailsComponent } from './app-content/game-details/game-details.component';
import { GamesListComponent } from './app-content/games-list/games-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { APP_ROUTING_PATHS } from './services/AppConstants';

const routes: Routes = [
  {
    path: APP_ROUTING_PATHS.ROOT_PATH,
    redirectTo: APP_ROUTING_PATHS.APP_PATH,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTING_PATHS.APP_PATH,
    component: AppContentComponent,
    data: { title: '' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GamesListComponent
      },
      {
        path: ':gameId',
        component: GameDetailsComponent
      }
    ]
  },
  { path: APP_ROUTING_PATHS.NOT_FOUND, component: NotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes,
  { useHash: true }
);
