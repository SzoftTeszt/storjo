import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Environments } from './environments';
import { UpLoadFormComponent } from './up-load-form/up-load-form.component';
import { UpLoadListComponent } from './up-load-list/up-load-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadDetailsComponent } from './upload-details/upload-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UpLoadFormComponent,
    UpLoadListComponent,
    UploadDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    AngularFireModule.initializeApp(Environments.firebaseConfig), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
