// registration.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class RegistrationComponent implements OnDestroy {
  registrationForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordSubscription: any;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      confirmPassword: ['', [Validators.required,, this.matchPasswordValidator]],
      validator: this.matchPasswordValidator,
      confirmpasswordCheckbox: [false],
      passwordCheckbox: [false],
    });

   // Subscribe to the password field changes to revalidate confirmPassword
   this.registrationForm.get('password')?.valueChanges.subscribe(() => {
    this.registrationForm.get('confirmPassword')?.updateValueAndValidity();  // Update confirm password validity on password change
  });



  }

  // Custom Validator: Check if password and confirm password match
    matchPasswordValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.parent?.get('password');
      const confirmPassword = control.parent?.get('confirmPassword');
      return password?.value == confirmPassword?.value ? null : { passwordsMismatch: true };
    }  

  // Toggle Password Visibility
  togglePasswordVisibility(field: 'password' | 'confirmPassword', event: any) {
    if (field === 'password') {
      this.showPassword = event.target.checked;
    } else {
      this.showConfirmPassword = event.target.checked;
    }
  }

    // Unsubscribe from the subscription to avoid memory leaks
    ngOnDestroy(): void {
      if (this.passwordSubscription) {
        this.passwordSubscription.unsubscribe(); // Unsubscribe when the component is destroyed
      }
    }

  register() {
    if (this.registrationForm.valid) {
      console.log('User Registered:', this.registrationForm.value);

// Reset the form after successful submission
this.registrationForm.reset();

// Optionally, reset the visibility toggles if you want them to reset as well
this.registrationForm.get('confirmpasswordCheckbox')?.setValue(false);
this.registrationForm.get('passwordCheckbox')?.setValue(false);
this.showPassword = false;
this.showConfirmPassword = false;

    } else {
      console.log('Form is invalid');
    }
  }
}



