// angular
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

// components
import { LayoutComponent } from '../../components/layout/layout.component';

// rxjs
import { lastValueFrom } from 'rxjs';

// libs
import { injectMutation } from '@tanstack/angular-query-experimental';

// services
import { AuthService } from '../../services/api/auth.service';

@Component({
  selector: 'app-login',
  imports: [LayoutComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    // this.loginForm.reset();
    this.loginMutation.mutate(this.loginForm.value);
    console.log('Dados do formulário', this.loginForm.value);
  }

  loginMutation = injectMutation(() => ({
    mutationFn: (userData: any) =>
      lastValueFrom(this.authService.login$(userData)),
  }));
}
