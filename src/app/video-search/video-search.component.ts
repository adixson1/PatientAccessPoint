import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {

  videos: any;
  selectedVideo: any;
  servicePoint="https://www.googleapis.com/books/v1/volumes/";
  condition=false;
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchForm= this.fb.group({
    keyword:[''],
  })

  onSubmit(){
    let keyword= this.searchForm.get('keyword')?.value;
    this.getVideos(keyword, 0);
  }

  getVideos(keyword: any, startIndex: any){
    let parameter= "?q=" + keyword + "&startIndex=" + startIndex + '&maxresults='+10;

    this.http.get(this.servicePoint+ parameter)
    .subscribe((data) => {
      console.log(data);
        this.videos=data;
        this.condition=true;
    });
  }

  selectVideo(id: string){
    this.http.get(this.servicePoint + id)
    .subscribe((data) => {
      this.selectedVideo = data;
      console.log(data);
    })
  }
}
