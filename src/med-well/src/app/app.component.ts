import { Component, OnInit } from '@angular/core';

declare var emailjs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'med-well';

  name = '';
  email = '';
  message = '';

  isSent = false;

  ngOnInit() {

  }

  public sendEmail() {
    const payload = {
      name: this.name,
      reply_email: this.email,
      message: this.message
    };

    emailjs.send('gmail', 'template_VQx1SwbV', payload);

    this.isSent = true;
  }
}
