import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private router: Router, private apiService: ApiService) { }
  
  formData = {
    name: '',
    password: '',
  };

  admin = environment.admin;

  handleChange(e: any) {
    const { name, value } = e.target;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    try {
      const {token} = await this.apiService.login(this.formData).toPromise();
      console.log(token);
      localStorage.setItem('token', token );
      localStorage.setItem('user', JSON.stringify(this.formData));

      if (this.formData.name === this.admin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/list']);
      }
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}