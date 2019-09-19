import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-content',
  templateUrl: './alert-content.component.html',
  styleUrls: ['./alert-content.component.css']
})
export class AlertContentComponent implements OnInit {

  @Input()
  data: string = "";

  constructor() { }

  ngOnInit() {
  }

}
