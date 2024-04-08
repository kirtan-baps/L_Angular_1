import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentPercentageCalComponent } from '../student-percentage-cal/student-percentage-cal.component';

@Component({
  selector: 'app-add-number',
  standalone: true,
  imports: [
    FormsModule, // Add FormsModule here
    CommonModule, // Add CommonModule here
    StudentPercentageCalComponent,
  ],
  templateUrl: './add-number.component.html',
  styleUrl: './add-number.component.css',
})
export class AddNumberComponent {
  num1: number = 0; // Initialize to some default value
  num2: number = 0; // Initialize to some default value
  result: number = 0;
  textData: string = '';
  firstName: string = '';
  lastName: string = '';
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  number2: any;
  number1: any;
  resultOfProduct: any;

  addNumbers(): void {
    this.result = this.num1 + this.num2;
  }
  productOfNumbers(): void {
    this.resultOfProduct = this.number1 * this.number2;
  }
}
