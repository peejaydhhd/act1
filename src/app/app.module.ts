import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoolComponent } from './cool/cool.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { WorkexpComponent } from './workexp/workexp.component';
import { EducComponent } from './educ/educ.component';

@NgModule({
  declarations: [
    AppComponent,
    CoolComponent,
    PersonalinfoComponent,
    WorkexpComponent,
    EducComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
