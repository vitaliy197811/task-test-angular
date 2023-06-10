import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = {
    name: '',
    password: '',
  };

  admin = environment.admin;

  constructor(private router: Router) {}

  handleChange(e: any) {
    const { name, value } = e.target;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    // if (this.formData.name === this.admin) {
    //   const data = await this.loginAdmin(this.formData);
    //   localStorage.setItem('token', data.token);
    //   localStorage.setItem('user', JSON.stringify(this.formData));
    //   this.router.navigate(['/admin']);
    // }

    // if (this.formData.name !== this.admin) {
    //   const data = await this.loginUser(this.formData);
    //   localStorage.setItem('token', data.token);
    //   localStorage.setItem('user', JSON.stringify(this.formData));
    //   this.router.navigate(['/list']);
    // }
    // window.location.reload();
  };
}
