import { Component } from '@angular/core';
import { Message } from '../../models/message.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page-component',
  imports: [FormsModule ],
  templateUrl: './contact-page-component.html',
  styleUrl: './contact-page-component.css'
})
export class ContactPageComponent {
  newMessage: Message = {
    lastname: '',
    firstname: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    console.log("Message submitted ==========>", this.newMessage)
  }
}
