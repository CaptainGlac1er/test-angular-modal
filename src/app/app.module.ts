import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OkComponent } from './ok/ok.component';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { ModalDirective } from './modal.directive';
import { TextModalComponent } from './text-modal/text-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OkComponent,
    BasicModalComponent,
    ModalDirective,
    TextModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
