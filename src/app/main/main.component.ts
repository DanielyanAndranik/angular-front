import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // public books : BookComponent[];
  public books;

  constructor(private dataService:DataService) { 
    
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.dataService.getBooks().subscribe(
            data => { this.books = data },
            err => console.error(err),
            () => console.log('done loading books')
          );
  }

}
