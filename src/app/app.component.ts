import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalService} from './modal.service';
import {OkComponent} from './ok/ok.component';
import {ModalDirective} from './modal.directive';
import {TextModalComponent} from './text-modal/text-modal.component';
import {RecursiveTextModalComponent} from './recursive-text-modal/recursive-text-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-angular-modal';
  @ViewChild(ModalDirective, {static: true}) modalElement: ModalDirective;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalService.setElementRef(this.modalElement.viewContainerRef);
  }

  async openModal() {
    alert(await this.modalService.openModal(OkComponent));
  }

  async openTextModal() {
    alert(await this.modalService.openModal<string>(TextModalComponent));
  }

  async openRecursiveTextModal() {
    try {
      alert((await this.modalService.openModal<string>(RecursiveTextModalComponent)));
    } catch (error) {
      alert('modal cancelled');
    }
  }
}
