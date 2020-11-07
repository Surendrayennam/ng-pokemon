import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.scss']
})
export class PokemondetailsComponent implements OnInit {
  pokemon: any;
  pokemonId: number;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.pokemonId = parseInt(params.get('id'), 10) + 1;
    });
    this.getPokemonItemDetails();
  }

  getPokemonItemDetails() {
    this.dataService.getImageDetails(this.pokemonId).subscribe((resp) => {
      this.pokemon = resp;
      console.log('this.pokemon', this.pokemon)
    })
  }

}
