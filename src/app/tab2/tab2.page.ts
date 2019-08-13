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
  mediar: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;
  mres: any


  constructor(private apiWService: ApiWService) {}

  ngOnInit() {
        this.getMedia();
    this.searchChanged();

    }

  searchChanged(){

      this.results = this.apiWService.getPost("posts?per_page=20");
      console.log('My resultADP:', this.results);

      this.results.subscribe(res => {
           console.log('RAW2:', res);
           for (let i = 0; i < res.length; i++) {
                console.log(res[i].title);

            }
      })

    }

    getMedia(){

        this.mediar = this.apiWService.getMedia("?per_page=20");
        console.log('My resultADP:', this.mediar);

        this.mediar.subscribe(mres => {
             console.log('RAW2 media:', mres);
             this.mres = mres;

        })

      }
      getItemById(id): string
      {
      let a='';

             for (let i = 0; i < this.mres.length; i++) {

                 if(id === this.mres[i].post ){
                 console.log('imagen ress--',this.mres[i].source_url);
                 a=this.mres[i].source_url;
                }
             }
        return a;
    }



}
