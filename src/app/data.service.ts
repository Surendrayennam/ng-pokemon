import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  public getAllPokemanDetails() {
    return this.http.get(this.baseUrl + '/pokemon?limit=20');
  }

  public getImageDetails(id: number) {
    return this.http.get(this.baseUrl + '/pokemon/' + id);
  }
}
