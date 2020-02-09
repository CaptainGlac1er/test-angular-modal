import {Component, OnInit} from '@angular/core';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-recursive-text-modal',
  templateUrl: './recursive-text-modal.component.html',
  styleUrls: ['./recursive-text-modal.component.scss']
})
export class RecursiveTextModalComponent extends BasicModalComponent<string> implements OnInit {
  data = '';

  constructor(
    private modalService: ModalService) {
    super();
  }

  ngOnInit(): void {
  }

  close() {
    this.returnCall(this.data);
  }

  async moreData() {
    this.data += await this.modalService.openModal(RecursiveTextModalComponent);
  }
}
