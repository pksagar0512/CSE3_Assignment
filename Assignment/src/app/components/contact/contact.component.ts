import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true, // ✅ If using standalone components
  imports: [CommonModule, FormsModule] // ✅ Add CommonModule & FormsModule
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Form Submitted', this.contact);
  }
}
