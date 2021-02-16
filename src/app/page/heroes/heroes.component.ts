import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroesList$: BehaviorSubject<Hero[]> = this.hService.list$;

  phrase: string = '';
  searchKey: string = 'name';
  searchKeys: string[] = Object.keys(new Hero());

  columnKey: string = 'id';

  constructor(private hService: HeroService) { }

  ngOnInit(): void {
    this.hService.getAll();
  }

  onDelete(hero: Hero): void {
    this.hService.remove(hero);
  }

  onColumnSelect(key: string) {
    this.columnKey = key;
  }
}
