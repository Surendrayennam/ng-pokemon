import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllpokemanComponent } from './allpokeman/allpokeman.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';
import { DefaultimagePipe } from './defaultimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllpokemanComponent,
    PokemondetailsComponent,
    DefaultimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
