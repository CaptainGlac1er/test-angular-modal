import {Component, OnInit} from '@angular/core';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.scss']
})
export class OkComponent extends BasicModalComponent<boolean> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  close(result: boolean) {
    this.returnCall(result);
  }

  clickAway() {
    alert('user tried to click away');
  }
}
