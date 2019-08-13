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
    public formBuilder: FormBuilder,
   /*  private emailComposer: EmailComposer */
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
/* private envio() {
this.emailComposer.isAvailable().then((available: boolean) => {
    if (available) {
    }
   });

const email = {
     to: 'marto9610@gmail.com',
     subject: 'Cordova Icons',
     body: 'How are you? Nice greetings from Leipzig',
     isHtml: true
   }
this.emailComposer.open(email);
} */
}

