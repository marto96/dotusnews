import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {SearchType} from 'src/app/services/api-w.service'
import {ApiWService} from 'src/app/services/api-w.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;


  constructor(private apiWService: ApiWService) {}

  ngOnInit() {
    this.searchChanged();
    }

  searchChanged(){
      this.results = this.apiWService.getPost("posts");
      console.log('My resultADP:', this.results);
      this.results.subscribe(res => {
           console.log('RAW2:', res);
           for (let i = 0; i < res.length; i++) {
                console.log(res[i].title);
            }
      })

    }

}
