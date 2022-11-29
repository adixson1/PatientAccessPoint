import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books: any;
  selectedBook: any;
  servicePoint = "https://www.googleapis.com/books/v1/volumes/";
  condition = false;

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
  }

  searchForm = this.fb.group({
    keyword: [''],
  })

  onSubmit(){
    let keyword = this.searchForm.get('keyword').value;
    this.getBooks(keyword, 0);
  }

  getBooks(keyword, startIndex) {
    let parameter = "?q=" + keyword + "&startIndex="+ startIndex + "&maxResults="+10;

    this.http.get(this.servicePoint + parameter)
    .subscribe((data) => {
        console.log(data);
        this.books = data;
        this.condition = true;
    }); 
  }
  selectBook(id){
    this.http.get(this.servicePoint + id)
    .subscribe((data) => {
      this.selectedBook = data;
      console.log(data);
    })
  }
    
}
