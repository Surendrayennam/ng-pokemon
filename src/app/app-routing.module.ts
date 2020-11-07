import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpokemanComponent } from './allpokeman/allpokeman.component';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';

const routes: Routes = [

  {path:'', redirectTo:'allpokemon', pathMatch:'full'},
  { path:'allpokemon', component:AllpokemanComponent},
  { path:'details/:id', component:PokemondetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
