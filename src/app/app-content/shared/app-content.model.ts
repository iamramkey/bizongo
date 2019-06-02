/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:42:41
 * @modify date 2019-06-03 00:42:41
 * @desc [description]
 */

export interface IGame {
  Rank: string;
  Name: string;
  Platform: string;
  Year: string;
  Genre: string;
  Publisher: string;
  Global_Sales: string;
}

export interface IHeader {
  field: string;
  displayName: string;
  sortAsc?: boolean;
  sortDesc?: boolean;
}

export class AppContent {
  public gamesList: IGame[];
  public gamesListHeaders: IHeader[];
  public selectedGame: IGame;
}
