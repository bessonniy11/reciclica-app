import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from "@ionic/angular";
import {HomePageRoutingModule} from "../pages/home/home-routing.module";
import {PickupCallCardComponent} from "./pickup-call-card/pickup-call-card.component";

@NgModule({
  declarations: [
    PickupCallCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    PickupCallCardComponent
  ]
})

export class ComponentsModule {
}
