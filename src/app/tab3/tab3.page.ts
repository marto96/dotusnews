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
  name = '';
  email = '';
  gender = '';
  myForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public emailComposer: EmailComposer
  ) {
    this.myForm = this.createMyForm();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  saveData() {
    console.log(this.myForm.value["email"]);
    let email = {
      to: 'marto9610@gmail.com',
      subject: "I'm interested about in " + this.myForm.value["gender"],
      body: 'Hi! my name is ' + this.myForm.value["name"] + ', I would like to get from you, my contact email is ' + this.myForm.value["email"],
      isHtml: true
    }
 this.emailComposer.open(email);
  }
  private createMyForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
    });
}
}

