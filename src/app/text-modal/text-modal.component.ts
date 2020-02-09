import { Component, OnInit } from '@angular/core';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';

@Component({
  selector: 'app-text-modal',
  templateUrl: './text-modal.component.html',
  styleUrls: ['./text-modal.component.scss']
})
export class TextModalComponent extends BasicModalComponent<string> implements OnInit {
  data: string;

  ngOnInit(): void {
  }

  close() {
    this.returnCall(this.data);
  }
}
