import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {ReceiptComponent} from "./receipt/receipt.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "../app-routing.module";
import {NbCardModule, NbDialogService} from "@nebular/theme";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NbCardModule
  ],
  providers: [NbDialogService],
})
export class MainModule { }
