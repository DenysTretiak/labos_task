import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {
    path: "",
    component: FavouriteComponent,
    data: { title: "stms.menu.favourite" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteRotingModule {}
