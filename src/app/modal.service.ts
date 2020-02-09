import {ComponentFactoryResolver, Injectable, Type, ViewContainerRef} from '@angular/core';
import {BasicModalComponent} from './basic-modal/basic-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalElement: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) { }

  setElementRef(modalElement: ViewContainerRef) {
    this.modalElement = modalElement;
  }

  openModal<T>(modal: Type<BasicModalComponent<T>>): Promise<T> {
    return new Promise(((resolve) => {
      this.modalElement.clear();
      const component = this.modalElement.createComponent(this.componentFactoryResolver.resolveComponentFactory(modal));
      component.instance.returnCall = (returnData: T) => {
        this.modalElement.clear();
        resolve(returnData);
      };
    }));
  }
}
