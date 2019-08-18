import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
