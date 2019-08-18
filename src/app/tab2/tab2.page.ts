
import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import {SearchType} from 'src/app/services/api-w.service';
import {ApiWService} from 'src/app/services/api-w.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
@ViewChild(IonInfiniteScroll,null) infiniteScroll: IonInfiniteScroll;

  results: Observable<any>;
  mediar: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;
  mres: any;
  res: any;
  num = 1;
  num2 = 2;


  constructor(private apiWService: ApiWService) {}

  ngOnInit() {
        this.getMedia();
        this.searchChanged();

    }

  searchChanged(){

      this.results = this.apiWService.getPost("posts?page="+this.num);
      console.log('My resultADP:', this.results);

      this.results.subscribe(res => {
        this.res = res;
      });
    }

    loadData(event) {
        setTimeout(() => {
          console.log('Done');
          event.target.complete();

          // App logic to determine if all data is loaded
          // and disable the infinite scroll
           this.num=this.num+1

        //   this.getMedia();
         this.searchChanged();

          if (this.res.length == 100) {
            event.target.disabled = true;
          }
        }, 500);
      }


    getMedia(){

        this.mediar = this.apiWService.getMedia("?per_page=100");
        console.log('My resultADP:', this.mediar);

        this.mediar.subscribe(mres => {

             this.mres = mres;

        })

      }

      ajustarL(value){

    var temporal = document.createElement("div");
    temporal.innerHTML = value;
    var texto = temporal.textContent || temporal.innerText || "";
        return texto;
      }
      getItemById(id): string
      {
            let a='';
             for (let i = 0; i < this.mres.length; i++) {
                 if(id === this.mres[i].id ){
                 a=this.mres[i].source_url;
                }
             }
        return a;
    }


    convertAscii(value): string {

      let assic = [
        { code: '&#8220;', value: '“' },
        { code: '&#8221;', value: '”' },
        { code: '&#8216;', value: '‘' },
        { code: '&#8217;', value: '’' },
        { code: '&#8218;', value: ',' },
        { code: '&#8230;', value: '...' },
      ];

      assic.map(item => {
        value = value.replace(item.code, item.value);
      });

      return value;
    }


}
