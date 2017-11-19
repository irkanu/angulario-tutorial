import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  heroes: Hero[];

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // getHeroesTest(): Observable<Hero[]> {
  //   this.http.get('http://private-2b26d-learningangular2.apiary-mock.com/heroes')
  //     .subscribe(heroes => { return this.heroes = heroes; });
  // }

}
