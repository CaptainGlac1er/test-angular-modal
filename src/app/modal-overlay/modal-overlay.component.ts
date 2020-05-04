import {Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';

@Component({
  selector: 'app-modal-overlay',
  templateUrl: './modal-overlay.component.html',
  styleUrls: ['./modal-overlay.component.scss']
})
export class ModalOverlayComponent<T> implements OnInit {
  @ContentChild(BasicModalComponent) modal: BasicModalComponent<T>;

  @Input() big = true;
  @Output() clickAway = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}
