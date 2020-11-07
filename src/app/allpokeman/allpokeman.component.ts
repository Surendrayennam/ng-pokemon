import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allpokeman',
  templateUrl: './allpokeman.component.html',
  styleUrls: ['./allpokeman.component.scss']
})
export class AllpokemanComponent implements OnInit, OnDestroy {
  allpokemon: any;
  allPokemanSubscription: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }

  getAllDetails() {
    this.allPokemanSubscription = this.dataService.getAllPokemanDetails().subscribe((val) => {
      this.allpokemon = val['results'];
      console.log('VAL', this.allpokemon)
    });
  }

  ngOnDestroy(): void {
    if(!!this.allPokemanSubscription) {
      this.allPokemanSubscription.unsubscribe();
    }
  }
}
