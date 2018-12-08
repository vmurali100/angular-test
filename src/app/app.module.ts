import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogueCompoenent } from './app.component';
import { CustomMaterialModule } from 'src/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { InvoiceService } from './invoice.service';
import { DateFormatPipe } from './date-format.pipe';
import { DateAdapter} from "@angular/material";
import { DateFormat } from "./date-format";
import { LoginComponent, LoginDialogueCompoenent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialogueCompoenent,
    DateFormatPipe,
    LoginComponent,
    LoginDialogueCompoenent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [InvoiceService,{ provide: DateAdapter, useClass: DateFormat }],
  bootstrap: [AppComponent],
  entryComponents: [DialogueCompoenent,LoginDialogueCompoenent]


})
export class AppModule { 
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("en-in"); // DD/MM/YYYY
  }
}
