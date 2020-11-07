import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allpokeman',
  templateUrl: './allpokeman.component.html',
  styleUrls: ['./allpokeman.component.scss']
})
export class AllpokemanComponent implements OnInit {
  allpokemon: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }

  getAllDetails() {
    this.dataService.getAllPokemanDetails().subscribe((val) => {
      this.allpokemon = val['results'];
      console.log('VAL', this.allpokemon)
    });
  }
}
