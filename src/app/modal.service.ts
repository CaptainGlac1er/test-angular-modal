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

  addNewModal<T>(modal: Type<BasicModalComponent<T>>) {
    if (this.modalElement.length > 0) {
      //this.modalStack.push(this.modalElement.detach());
    }
    return this.modalElement.createComponent<BasicModalComponent<T>>(this.componentFactoryResolver.resolveComponentFactory(modal));
  }

  goToPreviousModal() {
    this.modalElement.remove();
    if (this.modalStack.length > 0) {
      //this.modalElement.insert(this.modalStack.pop());
    }
  }

  openModal<T>(modal: Type<BasicModalComponent<T>>): Promise<T> {
    return new Promise(((resolve, reject) => {
      const component = this.addNewModal<T>(modal);
      component.instance.cancelCall = () => {
        this.goToPreviousModal();
        reject();
      };
      component.instance.returnCall = (returnData: T) => {
        this.goToPreviousModal();
        resolve(returnData);
      };
    }));
  }
}
