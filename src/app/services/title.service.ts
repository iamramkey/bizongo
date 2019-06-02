/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:41:59
 * @modify date 2019-06-03 00:41:59
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AppContent } from '../app-content/shared/app-content.model';

const APP_TITLE = 'Top Games List ';
const SEPARATOR = ' | ';

@Injectable()
export class AppTitleService {
  public static ucFirst(string: string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private appContent: AppContent
  ) {}

  init() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .map(data => {
        if (data.title) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return this.router.url.split('/').reduce((acc, frag) => {
            if (acc && frag) {
              acc += SEPARATOR;
            }
            if (
              this.appContent.selectedGame instanceof Object &&
              typeof +frag === 'number' &&
              +frag === +frag
            ) {
              frag = this.appContent.selectedGame.Name;
            }
            return acc + AppTitleService.ucFirst(frag);
          });
        }
      })
      .subscribe(pathString =>
        this.titleService.setTitle(`${APP_TITLE} ${pathString}`)
      );
  }
}
