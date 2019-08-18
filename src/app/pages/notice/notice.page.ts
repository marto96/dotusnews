import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiWService} from 'src/app/services/api-w.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  information = null;
  mediar: Observable<any>;
  mres = null;

  constructor(
    private activatedRoute: ActivatedRoute ,
    private apiWService: ApiWService,
    protected sanitizer: DomSanitizer
   ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiWService.getDetailsPost(id).subscribe(result => {
     console.log('details',result)
     this.information = result;
     this.getMedia(this.information.featured_media);
   })


  }

  ajustarHTML(value) {
    var temporal = document.createElement("div");
    temporal.innerHTML = value;
    var texto = temporal.textContent || temporal.innerText || "";
    return texto;
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
  getMedia(id) {
      this.mediar = this.apiWService.getMedia('/' + id);
      this.mediar.subscribe(mres => {
           console.log('RAW2 media:', mres);
           this.mres = mres;
      })
    }

  openWensite() {
    window.open(this.information.Website, '_blank');
  }

}
