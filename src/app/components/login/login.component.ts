import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private httpClient: HttpClient) {
  }

  submitLogin() {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }



  // submitLogin() {
  //   this.httpClient.get("https://admin-panel-a2bd6-default-rtdb.europe-west1.firebasedatabase.app/login.json").subscribe(
  //     data => 
  //     this.authService.login(this.loginForm.value, data).subscribe({
  //     next: () => this.router.navigate(['admin']),
  //     error: (err) => alert(err.message)
  //     }))
  // }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }
}
