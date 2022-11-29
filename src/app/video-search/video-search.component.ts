import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})

export class VideoSearchComponent implements OnInit {
  videos!: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }


  ngOnInit() {
  //   this.spinner.show()
  //   setTimeout(()=>
  //   {
  //     this.spinner.hide()
  //   },3000)
  //   this.videos = [];
  //   this.youTubeService
  //     .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', '10')
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(lista => {
  //       for (let element of lista["items"]) {
  //         this.videos.push(element)
  //       }

  //     });
  }

}