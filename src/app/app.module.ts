import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReceiptComponent} from './main/receipt/receipt.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule,
  NbDialogService,
  NbIconModule, NbInputModule, NbLayoutModule,
  NbMenuModule, NbOptionModule, NbPopoverModule, NbRadioModule, NbSelectModule, NbSpinnerModule,
  NbThemeModule,
  NbTooltipModule, NbUserModule
} from "@nebular/theme";
import {config} from "rxjs";
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import {MainModule} from "./main/main.module";
import {routes} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCommonModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ReceiptComponent,
  ],
    imports: [
      MatButtonModule,
      MatCommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
        BrowserModule,
        FormsModule,
        NbDialogModule.forRoot(),
        NbThemeModule.forRoot(),
        NbMenuModule,
        NbCardModule,
        NbIconModule,
        NbTooltipModule,
        NbPopoverModule,
        NbSpinnerModule,
        ReactiveFormsModule,
        NbOptionModule,
        NbSelectModule,
        NbDatepickerModule,
        NbInputModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbLayoutModule,
        MainModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule
    ],
  providers: [NbDialogService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
