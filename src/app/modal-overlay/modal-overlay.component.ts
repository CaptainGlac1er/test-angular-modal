import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-overlay',
  templateUrl: './modal-overlay.component.html',
  styleUrls: ['./modal-overlay.component.scss']
})
export class ModalOverlayComponent<T> implements OnInit {
  @Input() big = false;
  @Output() clickAway = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickModal($event: MouseEvent) {
    $event.stopPropagation();
  }

  clickModalBackdrop($event: MouseEvent) {
    this.clickAway.emit();
  }
}
