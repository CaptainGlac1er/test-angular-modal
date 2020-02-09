import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent<T> implements OnInit {
  @Input() returnCall: (data: T) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
