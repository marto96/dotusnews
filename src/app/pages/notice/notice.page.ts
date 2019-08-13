import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'
import {ApiWService} from 'src/app/services/api-w.service'


@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  information = null;
  mediar: Observable<any>;
  mres = null;

  constructor(private activatedRoute: ActivatedRoute , private apiWService: ApiWService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
   this.apiWService.getDetailsPost(id).subscribe(result => {
     console.log('details',result)
     this.information = result;
     this.getMedia(this.information.featured_media);


   })

   
  }


  getMedia(id){

      this.mediar = this.apiWService.getMedia('/'+id);
      console.log('My resultADP:', this.mediar);

      this.mediar.subscribe(mres => {
           console.log('RAW2 media:', mres);
           this.mres = mres;

      })

    }

  openWensite(){
    window.open(this.information.Website, '_blank');
  }

}
