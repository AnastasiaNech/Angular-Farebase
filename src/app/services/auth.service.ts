import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private router: Router, private fireauth : AngularFireAuth) {
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  setCurUser(email: string) {
    return localStorage.setItem('email', email);
  }

  getCurUser() {
    return localStorage.getItem('email');
  }

  // singUp(userInfo: { email: string, password: string }): Observable<string | boolean> {
  //   if (userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123') {
  //     this.setToken('alksflkgsklgjslkjffksdgjnsadgskmg')
  //     return of(true)
  //   }
  //   return throwError(() => new Error('Failed SingUp'))
  // }

  // login(userInfo: { email: string, password: string }, dataInfo: any): Observable<string | boolean> {
  //   console.log(dataInfo);
  //   if (userInfo.email === dataInfo.email && userInfo.password === dataInfo.password) {
  //     this.setToken('alksflkgsklgjslkjffksdgjnsadgskmg')
  //     return of(true)
  //   }
  //   return throwError(() => new Error('Failed Login'))
  // }

   // login method
   login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
        localStorage.setItem('email', email);
          this.router.navigate(['admin']);
        }, err => {
        alert(err.message);
        this.router.navigate(['/not-found']);
    })
  }

    // register method
    singUp(email : string, password : string) {
      this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
      })
    }

  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }
}
