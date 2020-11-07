import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.scss']
})
export class PokemondetailsComponent implements OnInit, OnDestroy {
  pokemon: any;
  pokemonId: number;
  imageDetailSubscription : Subscription;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.pokemonId = parseInt(params.get('id'), 10) + 1;
    });
    this.getPokemonItemDetails();
  }

  getPokemonItemDetails() {
    this.imageDetailSubscription = this.dataService.getImageDetails(this.pokemonId).subscribe((resp) => {
      this.pokemon = resp;
      console.log('this.pokemon', this.pokemon)
    })
  }

  ngOnDestroy(): void {
    if(!!this.imageDetailSubscription) {
      this.imageDetailSubscription.unsubscribe();
    }
  }

}
