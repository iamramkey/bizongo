/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:42:33
 * @modify date 2019-06-03 00:42:33
 * @desc [description]
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { AppContent } from './app-content.model';

@Injectable()
export class AppContentService {
  constructor(private http: HttpClient, private appContent: AppContent) {}

  public loadGames() {
    return this.http.get(environment.assetsUrl + environment.gamesListUrl, {
      responseType: 'text'
    });
  }
}
