/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:42:06
 * @modify date 2019-06-03 00:42:06
 * @desc [description]
 */
import { ISubscription } from 'rxjs/Subscription';

export const EMPTY_STRING = '';

export const APP_ROUTING_PATHS = {
  ROOT_PATH: EMPTY_STRING,
  APP_PATH: 'app',
  NOT_FOUND: '**',
  QUESTION_ID: ':id',
  ROOT_PATH_URL: '/'
};

export const APPLICATION_MAIN_TITLE = 'After Math';

export function UNSUBSCRIBE(sub: ISubscription) {
  if (sub instanceof Object && sub.unsubscribe instanceof Function) {
    sub.unsubscribe();
  }
}
