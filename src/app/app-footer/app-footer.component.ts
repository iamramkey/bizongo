/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:42:29
 * @modify date 2019-06-03 00:42:29
 * @desc [description]
 */

import { Component } from '@angular/core';
import { APPLICATION_MAIN_TITLE } from '../services/AppConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
  public APPLICATION_MAIN_TITLE = APPLICATION_MAIN_TITLE;
}
