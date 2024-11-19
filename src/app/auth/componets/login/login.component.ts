import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // Corregido: styleUrl -> styleUrls
})
export class LoginComponent {

  private authService = inject(AuthService);  // Corregido el nombre de la variable
  private router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required)
  });

  funIngresar() {
    this.authService.loginConnest(this.loginForm.value).subscribe(
      (re) => {
        console.log(re)
        this.router.navigate(["/admin"])  // Corregido el nombre de la variable
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
