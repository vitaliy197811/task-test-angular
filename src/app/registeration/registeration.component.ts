import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent {
  formData = {
    name: '',
    password: '',
  };

  constructor(private router: Router) {}

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
  //   await this.registerUser(this.formData);

  //   const data = await this.loginUser(this.formData);
  //   localStorage.setItem('token', data.token);
  //   localStorage.setItem('user', JSON.stringify(this.formData));
  //   this.router.navigate(['/list']);
  //   window.location.reload();
  };
}
