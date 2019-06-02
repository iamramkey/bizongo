/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:42:26
 * @modify date 2019-06-03 00:42:26
 * @desc [description]
 */

import { Component } from '@angular/core';
import { APPLICATION_MAIN_TITLE } from '../services/AppConstants';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  public APPLICATION_MAIN_TITLE = APPLICATION_MAIN_TITLE;
}
