import { Component, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { AppLoaderService } from '../../services/app-loader.service';
import { UNSUBSCRIBE } from '../../services/AppConstants';
import { AppContentService } from '../shared/app-content.service';
import { AppContent, IHeader, IGame } from './../shared/app-content.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnDestroy {
  searchInput = '';
  private headers = [] as IHeader[];
  private data = [] as IGame[];
  public tableData = [] as IGame[];
  public set selectedGame(val: IGame) {
    this.appContent.selectedGame = val;
  }
  private previousSortedHeader: any;
  private loadGamesSubscription: ISubscription;

  constructor(
    private appContentService: AppContentService,
    private appContent: AppContent
  ) {
    this.loadGamesSubscription = this.appContentService.loadGames().subscribe(
      res => {
        const csv: string = res;
        let gameRows: string[] = csv.split(/\r|\n|\r/);
        const headers: string[] = gameRows[0].split(',');
        this.appContent.gamesListHeaders = [] as IHeader[];
        for (const header of headers) {
          if (typeof header === 'string' && header.trim().length > 0) {
            this.appContent.gamesListHeaders.push({
              field: header,
              displayName: header
            });
          }
        }
        gameRows = gameRows.slice(1);
        const gamesList = [] as IGame[];

        for (const row of gameRows) {
          // split content based on comma
          const data = row.split(',');
          if (data.length === headers.length) {
            const gameObject: IGame = ({} as any) as IGame;
            for (let j = 0; j < headers.length; j++) {
              if (
                typeof headers[j] === 'string' &&
                headers[j].trim().length > 0 &&
                typeof data[j] === 'string' &&
                data[j].trim().length > 0
              ) {
                gameObject[headers[j]] = data[j];
              }
            }
            gamesList.push(gameObject);
          }
        }
        this.appContent.gamesList = gamesList;
        AppLoaderService.showLoader();
        this.headers = this.appContent.gamesListHeaders;
        this.data = this.tableData = this.appContent.gamesList;
      },
      err => {
        this.data = this.tableData = this.appContent.gamesList = this.appContent.gamesListHeaders = [];
      }
    );
  }

  public onSearchInputValueChange(e: any) {
    const filteredItems = [];
    if (e.currentTarget.value.trim().length > 0) {
      const re = new RegExp(e.currentTarget.value.trim(), 'gi');
      this.data.forEach(row => {
        for (const column in row) {
          if (row[column] != null && row[column] != undefined) {
            if ((row[column] || '').toString().search(re) > -1) {
              return filteredItems.push(row);
            }
          }
        }
      });
      this.tableData = this.populateSortedData(
        this.previousSortedHeader,
        filteredItems
      );
    } else {
      this.tableData = this.populateSortedData(
        this.previousSortedHeader,
        this.data.slice(0)
      );
    }
  }

  public sortTableData(header) {
    if (
      this.previousSortedHeader instanceof Object &&
      this.previousSortedHeader !== header
    ) {
      this.previousSortedHeader.sortAsc = this.previousSortedHeader.sorDesc = false;
    }
    if (header.sortAsc) {
      header.sortDesc = true;
      header.sortAsc = false;
    } else if (header.sortDesc) {
      header.sortAsc = header.sortDesc = false;
    } else {
      header.sortAsc = true;
    }
    if ((this.searchInput || '').toString().trim().length === 0) {
      this.tableData = this.data.slice(0);
    }
    this.tableData = this.populateSortedData(header, this.tableData);
    this.previousSortedHeader = header;
  }

  private populateSortedData(header, arr) {
    if (header instanceof Object && (header.sortAsc || header.sortDesc)) {
      return [
        ...arr.sort((a, b) => {
          if (header.sortDesc) {
            if (+a[header.field] > -Infinity || +b[header.field] > -Infinity) {
              return b[header.field] - a[header.field];
            }
            return (
              +(b[header.field] > a[header.field]) ||
              +(b[header.field] === a[header.field]) - 1
            );
          } else {
            if (+a[header.field] > -Infinity || +b[header.field] > -Infinity) {
              return a[header.field] - b[header.field];
            }
            return (
              +(a[header.field] > b[header.field]) ||
              +(a[header.field] === b[header.field]) - 1
            );
          }
        })
      ];
    }
    return arr;
  }
  public ngOnDestroy() {
    UNSUBSCRIBE(this.loadGamesSubscription);
  }
}
