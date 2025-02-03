import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators , FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule ,  CommonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  myForm: FormGroup;


  constructor(private fb: FormBuilder) {

    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: new FormControl('', [Validators.required, Validators.email]),
      password: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // Mark fields to show errors
      return;
    }
    console.log(this.myForm.value);
  }

}
