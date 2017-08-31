import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  listOfCities = [];
  typedArray: City [] = [];
  searchTerms: string;
  constructor() { }

  ngOnInit() {
    this.listOfCities = [
      {
        "_id": "59a596c8f58f37e293211752",
        "isActive": true,
        "temperature": 19,
        "picture": "http://placehold.it/32x32",
        "eyeColor": "brown",
        "name": "Katy Andrews",
        "gender": "female",
        "company": "DELPHIDE"
      },
      {
        "_id": "59a596c88bccfead616cce24",
        "isActive": true,
        "temperature": 13,
        "picture": "http://placehold.it/32x32",
        "eyeColor": "blue",
        "name": "Clay Hartman",
        "gender": "male",
        "company": "BLANET"
      },
      {
        "_id": "59a596c8539b7ff7958c892e",
        "isActive": false,
        "temperature": 9,
        "picture": "http://placehold.it/32x32",
        "eyeColor": "green",
        "name": "Flores Webster",
        "gender": "male",
        "company": "BIZMATIC"
      },
      {
        "_id": "59a596c8f4aa61c1aaf7acc6",
        "isActive": true,
        "temperature": 22,
        "picture": "http://placehold.it/32x32",
        "eyeColor": "blue",
        "name": "Janna Christensen",
        "gender": "female",
        "company": "KEGULAR"
      },
      {
        "_id": "59a596c8c421bc96d3279f0d",
        "isActive": true,
        "temperature": 15,
        "picture": "http://placehold.it/32x32",
        "eyeColor": "blue",
        "name": "Peck Sawyer",
        "gender": "male",
        "company": "GEEKKO"
      },
      {
        "_id": "59a596c8849928774a64da54",
        "isActive": false,
        "temperature": 7,
        "picture": "http://placehold.it/32x32",
        "eyeColor": "green",
        "name": "Dennis Hickman",
        "gender": "male",
        "company": "CIPROMOX"
      }
    ];
    this.getCityes();
  }

  deleteText () {
    this.searchTerms = '';
  }
  transformText () {
    this.searchTerms = this.searchTerms.toLocaleUpperCase();
  }

  cathcDeleting(index) {
    this.typedArray.splice(index, 1);
    console.log(index);
  }

  private getCityes() {
    for (const serverCity of this.listOfCities) {
      this.typedArray.push(new City(serverCity.isActive, serverCity.temperature, serverCity.picture, serverCity.name));
    }
    console.log(this.typedArray);
  }
}
