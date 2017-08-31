import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  @Input() search: string;
  @Output() searchTermsChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  deleteText () {
    this.search = '';
    this.searchTermsChange.emit();
  }
  transformText () {
    this.search = this.search.toLocaleUpperCase();
  }
}
