import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
  singUpForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) {
  }

  // submitSingUp() {
  //   this.httpClient.post("https://admin-panel-a2bd6-default-rtdb.europe-west1.firebasedatabase.app/login.json",
  //     this.singUpForm.value).subscribe((response) => {
  //       console.log(response);
  //       this.singUpForm.reset();
  //       this.router.navigate(["login"], {
  //         relativeTo: this.activatedRoute,
  //       });
  //     },
  //       (error) => {
  //         console.error()
  //       });
  // };

    submitSingUp() {
      this.authService.singUp(this.singUpForm.value.email,this.singUpForm.value.password);
  };


  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }
}
