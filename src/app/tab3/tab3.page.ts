import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  myForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  saveData() {
    console.log(this.myForm.value);
  }
  private createMyForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
    });
}

}

