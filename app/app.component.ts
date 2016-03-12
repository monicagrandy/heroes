// Components are the basic building blocks of Angular applications. A component controls portion of the screen — a view — through its associated template.


// Here we import the Angular Component decorator function from the main Angular library module because we need it to define our component.
import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

//tells Angular what template to use and how to create the component.
@Component({
  //selector specifies a simple CSS selector for an HTML element that represents the component.
  selector: 'my-app',
  //The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.
  template: ` 
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div> 
    `
  })

export class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
  id: 1,
  name: 'Windstorm'
  };
}