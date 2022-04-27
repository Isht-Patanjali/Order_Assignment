import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  { path: 'main', pathMatch: 'full', component: MainComponent},
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: '**', component: MainComponent },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
