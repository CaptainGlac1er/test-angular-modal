import {ComponentFactoryResolver, Injectable, Type, ViewContainerRef, ViewRef} from '@angular/core';
import {BasicModalComponent} from './basic-modal/basic-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalElement: ViewContainerRef;
  modalStack: ViewRef[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.modalStack = [];
  }

  setElementRef(modalElement: ViewContainerRef) {
    this.modalElement = modalElement;
  }

  openModal<T>(modal: Type<BasicModalComponent<T>>): Promise<T> {
    return new Promise(((resolve) => {
      if (this.modalElement.length > 0) {
        this.modalStack.push(this.modalElement.detach(0));
      }
      const component =
        this.modalElement.createComponent<BasicModalComponent<T>>(this.componentFactoryResolver.resolveComponentFactory(modal), 0);
      component.instance.returnCall = (returnData: T) => {
        this.modalElement.remove();
        if (this.modalStack.length > 0) {
          this.modalElement.insert(this.modalStack.pop());
        }
        resolve(returnData);
      };
    }));
  }
}
