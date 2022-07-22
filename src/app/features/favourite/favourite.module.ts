import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavouriteRotingModule } from './favourite-roting.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [FavouriteComponent],
  imports: [
    CommonModule,
    SharedModule,
    FavouriteRotingModule
  ]
})
export class FavouriteModule { }
