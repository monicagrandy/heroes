// Components are the basic building blocks of Angular applications. A component controls portion of the screen — a view — through its associated template.


// Here we import the Angular Component decorator function from the main Angular library module because we need it to define our component.
import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from 'angular2/router'


//tells Angular what template to use and how to create the component.
@Component({
  //selector specifies a simple CSS selector for an HTML element that represents the component.
  selector: 'my-heroes',
  //The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: []
 })

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}


