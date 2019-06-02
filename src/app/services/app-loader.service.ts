/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-06-03 00:42:13
 * @modify date 2019-06-03 00:42:13
 * @desc [description]
 */

export class AppLoaderService {
  public static loading = true;

  public static showLoader(bool: boolean = false) {
    this.loading = bool;
  }
}
