import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./_page/home/home.component";
import {AppleComponent} from "./_page/apple/apple.component";
import {SmartphonesAndTabletsComponent} from "./_page/smartphones-and-tablets/smartphones-and-tablets.component";
import {LaptopsAndPCComponent} from "./_page/laptops-and-pc/laptops-and-pc.component";
import {PhotoAudioPs5Component} from "./_page/photo-audio-ps5/photo-audio-ps5.component";
import {TvComponent} from "./_page/tv/tv.component";
import {AppliancesComponent} from "./_page/appliances/appliances.component";
import {NotFoundComponent} from "./_page/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'apple', component: AppleComponent},
  {path: 'smartphones', component: SmartphonesAndTabletsComponent},
  {path: 'laptops-pk', component: LaptopsAndPCComponent},
  {path: 'photo-audio-ps5', component: PhotoAudioPs5Component},
  {path: 'tv', component: TvComponent},
  {path: 'appliances', component: AppliancesComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
