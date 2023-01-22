import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  public sendMessage() {
    window.open("https://api.whatsapp.com/send/?phone=5511960729253", "_blank");
  }

}
