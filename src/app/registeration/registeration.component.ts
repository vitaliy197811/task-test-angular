import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-user.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent {
  constructor(private router: Router, private apiService: ApiService) { }
  
  formData = {
    name: '',
    password: '',
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await this.apiService.register(this.formData).toPromise();
      const { token } = await this.apiService.login(this.formData).toPromise();
      console.log(token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(this.formData));
      this.router.navigate(['/list']);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
}
