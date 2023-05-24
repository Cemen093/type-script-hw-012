import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_page/home/home.component';
import { AppleComponent } from './_page/apple/apple.component';
import { SmartphonesAndTabletsComponent } from './_page/smartphones-and-tablets/smartphones-and-tablets.component';
import { LaptopsAndPCComponent } from './_page/laptops-and-pc/laptops-and-pc.component';
import { PhotoAudioPs5Component } from './_page/photo-audio-ps5/photo-audio-ps5.component';
import { TvComponent } from './_page/tv/tv.component';
import { AppliancesComponent } from './_page/appliances/appliances.component';
import { NotFoundComponent } from './_page/not-found/not-found.component';
import { HeaderComponent } from './conponents/header/header.component';
import { FooterComponent } from './conponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppleComponent,
    SmartphonesAndTabletsComponent,
    LaptopsAndPCComponent,
    PhotoAudioPs5Component,
    TvComponent,
    AppliancesComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
