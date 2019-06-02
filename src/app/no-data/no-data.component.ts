import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'no-data',
  templateUrl: 'no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {
  private defaultMessage = 'No Data Available';

  @Input('icon-class')
  iconClass;
  @Input()
  boldText;
  @Input()
  showCloseIcon;
  @Input()
  message;
  constructor() {}

  ngOnInit() {}
}
