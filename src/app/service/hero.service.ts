import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl: string = "http://localhost:3000/heroes";

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Hero[]>(this.heroesUrl).subscribe(
      heroes => this.list$.next(heroes)
    );
  }

  remove(hero: Hero): void {
    this.http.delete(`${this.heroesUrl}/${hero.id}`).subscribe(
      () => this.getAll()
    );
  }
}
