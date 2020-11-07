import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

public getAllPokemanDetails(){
  return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20');
}

public getImageDetails(id: number){
  return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id);
}

}
